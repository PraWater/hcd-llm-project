# HCD-LLM Project

This project is a health-based application that leverages LLMs to analyze the nutritional content of food and provide users with personalized insights into their dietary habits.

## To run the server

1. Install dependencies

   ```bash
   pip install -r requirements.txt
   ```

2. Start the server

   ```bash
   python server.py
   ```

   In the output, the server's ip will be displayed.

### Make a .env file to update server's ip for the app.

```bash
 EXPO_PUBLIC_LAPTOP_LOCALHOST=${server_ip}
```

## To run the app

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
