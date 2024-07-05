// src/App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import { Container, Typography, CssBaseline, createTheme, ThemeProvider, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f0f0f0',
    },
  },
});

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  const handleToggleFavorite = () => {
    const isFavorite = favorites.some(fav => fav.name === weatherData.name);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.name !== weatherData.name);
    } else {
      updatedFavorites = [...favorites, weatherData];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleRemoveFavorite = (city) => {
    const updatedFavorites = favorites.filter(fav => fav.name !== city.name);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px' }}>
        <Typography variant="h3" align="center" gutterBottom>
          So how's the weather?
        </Typography>
        <SearchBar onSearch={handleSearch} />
        {weatherData && (
          <WeatherCard
            weatherData={weatherData}
            isFavorite={favorites.some(fav => fav.name === weatherData.name)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
        <Typography variant="h5" style={{ marginTop: '20px' }}>Favorite Cities</Typography>
        <List>
          {favorites.map((city, index) => (
            <ListItem key={index} button onClick={() => handleSearch(city)}>
              <ListItemText primary={city.name} />
              <IconButton edge="end" onClick={(e) => {e.stopPropagation(); handleRemoveFavorite(city);}}>
                <Delete />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
};

export default App;
