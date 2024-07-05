// src/WeatherCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const WeatherCard = ({ weatherData, isFavorite, onToggleFavorite }) => {
  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">{weatherData.name}</Typography>
            <Typography variant="subtitle1">{weatherData.weather[0].description}</Typography>
            <Typography variant="h3">{weatherData.main.temp} °C</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item><WiHumidity /></Grid>
              <Grid item><Typography variant="body2">Humidity: {weatherData.main.humidity}%</Typography></Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
              <Grid item><WiStrongWind /></Grid>
              <Grid item><Typography variant="body2">Wind Speed: {weatherData.wind.speed} m/s</Typography></Grid>
            </Grid>
            <IconButton onClick={onToggleFavorite}>
              {isFavorite ? <Favorite color="secondary" /> : <FavoriteBorder />}
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
