import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import './App.css'; // If you have custom CSS

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </header>
    </div>
  );
};

export default App;
