import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import {OPENWEATHER_API_KEY} from "@env";
console.log(OPENWEATHER_API_KEY);
import Wheather from '../components/Wheather.js'

const Weather = () => {
  const [loading, setLoading] = useState(false); 
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(cityName) {
   
    setLoading(true);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${OPENWEATHER_API_KEY}`;
 

    try {
      const response = await fetch(API);

      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeatherData("Sehore");
  }, []);

  useEffect(() => {
    console.log(weatherData); // Log weatherData whenever it updates
  }, [weatherData]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="gray" size={36} />
      </View>
    );
  } else if (weatherData == null) {
    return (
      <View style={styles.container}>
        <Text>Weather data not found</Text>
      </View>
    );
  }

  return (
 
    <View>
      <Wheather weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background for the weather info
    padding: 20, // Padding around content
  },
  searchContainer: {
    marginBottom: 20, // Add some space between search bar and weather info
  },
  weatherInfo: {
    flex: 1, // Take up remaining space
    justifyContent: 'center',
  },
});

export default Weather;
