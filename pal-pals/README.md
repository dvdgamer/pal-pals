# How to Launch Expo
Expo is a powerful tool for developing and testing React Native applications. Follow the steps below to launch Expo and start building your project:

1. Install Expo CLI globally by running the following command in your terminal:
  ```
  npm install -g expo-cli
  ```

2. Navigate to your project directory using the `cd` command:
  ```
  cd /path/to/your/project
  ```

4. Choose a template for your project (e.g., "blank" or "tabs") and follow the prompts to set up your project.

5. Once the project is initialized, navigate into the project directory:
  ```
  cd your-project-name
  ```

6. Start the Expo development server by running the following command:
  ```
  expo start
  ```

   If `expo start` doesn't work, you can try using Expo Tunnel. Run the following command instead:
   ```
   expo start --tunnel
   ```

7. Expo will open a new tab in your browser with the Metro Bundler interface. From here, you can choose to run your app on a physical device or an emulator.

8. To run the app on a physical device, install the Expo Go app from the App Store (iOS) or Google Play Store (Android). Then, scan the QR code displayed in the Metro Bundler interface using the Expo Go app.

9. To run the app on an emulator, make sure you have an emulator set up and running. Then, click on the "Run on Android device/emulator" or "Run on iOS simulator" option in the Metro Bundler interface.

10. Your app should now be running on your chosen device or emulator. Make changes to your code, and Expo will automatically reload the app with the updated changes.

That's it! You have successfully launched Expo and can now start developing your React Native app. Happy coding!
