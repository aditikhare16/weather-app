import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [options, setOptions] = useState([]);

  const handleSearch = async (event, value) => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: value,
          appid: API_KEY,
          units: 'metric',
        },
      });
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={options.map((option) => option.name)}
      renderInput={(params) => (
        <TextField {...params} label="Search city" variant="outlined" />
      )}
      onInputChange={handleSearch}
    />
  );
};

export default SearchBar;
