# Weather App

## Overview
This is a React Native weather application that allows users to search for the current weather conditions of any city. The app features a user-friendly interface, real-time weather updates, and a loading indicator while fetching data from the API.

## Features
- **Search by City**: Users can search for the weather of any city by typing its name into the search bar.
- **Real-Time Weather Data**: Displays the current temperature, weather condition, and humidity.
- **Loading Indicator**: Shows a loading spinner while fetching weather data.
- **Dynamic Icons**: Changes the displayed weather icon based on the current weather condition (e.g., snow, haze, rain, or clear).
- **Reload Option**: Provides a button to reload the weather information for the current city.

## Screenshots
### 1. Main Screen
- A clean and centered layout displaying the weather information.
- Dark-themed background for better readability.

### 2. Loading Screen
- Semi-transparent overlay with a spinner to indicate the loading state.

## Installation
Follow these steps to set up the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npx expo start
   ```

## Usage
1. Open the app on your emulator or physical device.
2. Enter the name of a city in the search bar and press the search button.
3. View the weather information for the searched city, including temperature, weather condition, and humidity.
4. Use the "Reload" button to refresh the weather data for the displayed city.

## Code Structure
- **Weather.js**: Displays the main weather information and includes the search bar and reload functionality.
- **SearchBar.js**: A reusable component for the city search input and button.
- **Styles**: The styles are defined using `StyleSheet` for a modern and clean UI.
- **Assets**: Contains weather icons such as `haze`, `rainy`, `snowflake`, and `sunny`.

## Dependencies
- **React Native**: Framework for building native apps using React.
- **Expo**: A set of tools and services for React Native development.

## API Integration
The app uses a weather API (e.g., OpenWeatherMap) to fetch real-time weather data. Ensure you have an API key and configure it in your fetch function.

## Customization
1. **Theme**: You can change the background color and text styles in `Weather.js`.
2. **Weather Icons**: Replace or add new icons in the `assets/images` folder and update the `getIconImg` function in `Weather.js`.
3. **Error Handling**: Enhance the app by adding error handling for invalid city names or network issues.

## Future Improvements
- Add support for additional weather details (e.g., wind speed, pressure).
- Include a 5-day forecast feature.
- Add animations for a better user experience.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
- Icons sourced or customized for specific weather conditions.

---

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!

