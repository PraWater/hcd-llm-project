from flask import Flask, request, jsonify
import os
import base64
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import JsonOutputParser
from pydantic import BaseModel, Field
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


UPLOAD_FOLDER = 'uploaded_images'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


class CalorieAnalysis(BaseModel):
    name: str = Field(description="name of food sample in the image in kcal")
    calories: str = Field(description="calorie content of food sample in g")
    proteins: str = Field(description="protein content of food sample in g")
    fats: str = Field(description="fats content of food sample in g")
    carbohydrates: str = Field(
        description="carbohydrate content of food sample in g")
    dietary_fiber: str = Field(description="fiber content of food sample in g")
    sugars: str = Field(description="sugar content of food sample in g")
    sodium: str = Field(description="sodium content of food sample in mg")
    cholesterol: str = Field(
        description="cholesterol content of food sample in mg")


json_parser = JsonOutputParser(pydantic_object=CalorieAnalysis)


text_prompt = f"You are an expert dietician and you are helping your client estimate the amount of calories they are about to consume. The client requires accurate information for helping them achieve their fitness goals which you are responsible for. Estimate the amount of calories in this image. Step 1: Identify the food item in this image. Step 2: Estimate the weight (in grams) of the food item. Step 3: Now estimate the calorie count using the weight from step 2. Step 4: Now divide the content into calories, proteins, fats, etc. {
    json_parser.get_format_instructions()}"

model = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash")


@app.route('/get-calories', methods=['POST'])
def get_calories():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image_file = request.files['image']
    image_data = image_file.read()
    base64_image = base64.b64encode(image_data).decode('utf-8')

    image_url = f"data:image/jpeg;base64,{base64_image}"

    try:
        combined_prompt = HumanMessage(content=[
            {"type": "image_url", "image_url": image_url},
            {
                "type": "text",
                "text": text_prompt
            }
        ])
        response = model.invoke([combined_prompt])
        parsed_response = json_parser.parse(response.content)
        return parsed_response

    except IOError:
        return jsonify({'error': 'Invalid image file'}), 400


@app.route('/')
def check_health():
    return 'ok', 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
