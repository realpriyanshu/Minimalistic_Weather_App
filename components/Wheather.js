import { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { haze, rainy, snowflake, sunny } from "../assets/images/index.js";
import SearchBar from "./SearchBar.js";


export default function Weather({ weatherData ,fetchWeatherData}) {
  // Log the incoming weather data for debugging
  console.log(weatherData);

  const [icon, setIcon] = useState(""); // Initialize with an empty string or null
  const [loading, setLoading] = useState(false); 

  // Destructure data from weatherData safely
  const {
    weather = [],
    name = "",
    main: { temp = 0, humidity = 0 } = {},
  } = weatherData;
  const mainWeather = weather.length > 0 ? weather[0].main : ""; // Access the main property safely

  useEffect(() => {
    // Update icon whenever the weather data changes
    setIcon(getIconImg(mainWeather));
  }, [mainWeather]);

  // Function to map weather conditions to images
  function getIconImg(weather) {
    if (weather.toLowerCase() === "snow") return snowflake;
    if (weather.toLowerCase() === "haze") return haze;
    if (weather.toLowerCase() === "rain") return rainy;
    if (weather.toLowerCase() === "clear") return sunny; // Adjusted for common weather API naming
    return haze; // Default fallback icon
  }


  function handleSearch(city) {
    setLoading(true); // **Set loading to true when the search starts**
    fetchWeatherData(city);
    setLoading(false); // **Set loading to false after fetching is done**
  }
  return (
    <View style={styles.container}>
      {/* Loading spinner */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      {/* Search Bar */}
      <SearchBar OnSearch={handleSearch} />

      {/* Weather Information */}
      <View style={styles.weatherContainer}>
        <Text style={styles.cityName}>{name}</Text>

        <View style={styles.infoContainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.tempText}>{Math.round(temp)}°C</Text>
        </View>

        <Text style={styles.humidityText}>Humidity: {humidity}%</Text>
      </View>
      
      {/* Reload Button */}
      <TouchableOpacity style={styles.reloadButton} onPress={() => fetchWeatherData(name)}>
        <Text style={styles.reloadButtonText}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34", // Background color for the whole screen
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height,
    justifyContent: "center",  // Center all the content
    alignItems: "center", // Align content horizontally
    padding: 20,
  },
  // Loading overlay with spinner
  loadingOverlay: {
    position: "absolute", // Overlay appears above all elements
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker background for loading state
    justifyContent: "center", 
    alignItems: "center",
  },
  // Main weather container with centered content
  weatherContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  cityName: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  tempText: {
    fontSize: 60, // Increased font size for temperature
    color: "#fff",
    fontWeight: "600",
  },
  humidityText: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  // Reload button style
  reloadButton: {
    backgroundColor: "#4CAF50", 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 40,
  },
  reloadButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});