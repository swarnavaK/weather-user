import React, { useState, useEffect } from "react";
import { FARMER_API_URL, FARMER_API_KEY } from "../../api";
import FarmerForecast from "./FarmerForecast";
import TodayWeather from "./TodayWeather";
import LanguageSelector from "./LanguageSelector";

const Farmer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchWeatherData = async () => {
    try {
      // Get user's geolocation
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        // Construct API URL with latitude, longitude, and your API key
        const apiUrl = `${FARMER_API_URL}?lat=${latitude}&lon=${longitude}&key=${FARMER_API_KEY}`;

        // Fetch weather data
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse JSON response
        const data = await response.json();
        //console.log("data", data)
        // Update weatherData state with fetched data
        setWeatherData(data);
        setCurrentWeather(data.data[0])
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  //console.log("check", weatherData)

  useEffect(() => {
    
    fetchWeatherData();
    
  }, []); 

  return (
    <div>
      <LanguageSelector />
      <div className='w-full h-screen md:flex items-center justify-between md:gap-4'>
        {currentWeather && <TodayWeather data={currentWeather} />}
        {currentWeather && <FarmerForecast data={weatherData} />}
      </div>
    </div>
  );
};

export default Farmer;
