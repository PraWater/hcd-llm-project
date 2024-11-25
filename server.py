from flask import Flask, request, jsonify
import base64
import sqlite3
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import JsonOutputParser
from pydantic import BaseModel, Field
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


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
    print("calories requested")
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
        return parsed_response, 200

    except IOError:
        return jsonify({'error': 'Invalid image file'}), 400


def init_db(conn):
    conn.execute('''CREATE TABLE IF NOT EXISTS FoodItems
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INT NOT NULL,
        timestamp TEXT NOT NULL,
        name TEXT,
        calories TEXT,
        proteins TEXT,
        fats TEXT,
        carbohydrates TEXT,
        dietary_fiber TEXT,
        sugars TEXT,
        sodium TEXT,
        cholesterol TEXT);''')


@app.route('/store-food', methods=['POST'])
def store_food():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No JSON data provided'}), 400

    print(data)
    conn = sqlite3.connect('hcd-llm.db')
    init_db(conn)

    insert_command = '''INSERT INTO FoodItems (userId, timestamp, name, calories, proteins, fats, carbohydrates, dietary_fiber, sugars, sodium, cholesterol) VALUES (1, datetime('now', 'localtime'), ?, ?, ?, ?, ?, ?, ?, ?, ?);'''
    insert_values = (data['name'], data['calories'], data['proteins'], data['fats'], data['carbohydrates'],
                     data['dietary_fiber'], data['sugars'], data['sodium'], data['cholesterol'])

    cur = conn.cursor()
    cur.execute(insert_command, insert_values)
    conn.commit()

    return 'ok', 200


def query_db(query, args=(), one=False):
    """Helper function to query the database."""
    conn = sqlite3.connect('hcd-llm.db')
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    cur.execute(query, args)
    rv = cur.fetchall()
    conn.close()
    return (rv[0] if rv else None) if one else rv


@app.route('/get-food', methods=['GET'])
def get_food():
    print("get food requested")
    rows = query_db('SELECT * FROM FoodItems')
    food = [dict(row) for row in rows]
    return jsonify(food), 200


@app.route('/')
def check_health():
    return 'ok', 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
