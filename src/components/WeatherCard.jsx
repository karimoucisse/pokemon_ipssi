import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WeatherCard = ({ weather, unit }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 400,
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '10px',
      }}
      onClick={() => navigate(`/`)}
    >
      <CardContent
        sx={{
          backgroundColor: '#1c2930',
          width: '100%',
          p: 4,
          color: 'white',
          borderRadius: '10px',
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography mb={1}>{weather.name}</Typography>
          <Avatar
            alt="Remy Sharp"
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          />
        </Stack>
        <Typography variant="h2">
          {weather.main.temp}
          {unit !== 'celsius' ? ' F' : '°'}
        </Typography>
        <Stack mt={4} spacing={1}>
          {/* <Stack direction="row" spacing={2}> */}
          <Typography variant="body1">
            Temperature min: {weather.main.temp_min}
            {unit !== 'celsius' ? ' F' : '°'}
          </Typography>
          <Typography variant="body1">
            Temperature max: {weather.main.temp_max}
            {unit !== 'celsius' ? ' F' : '°'}
          </Typography>
          {/* </Stack> */}
          <Typography variant="body1">
            Humidité: {weather.main.humidity}%
          </Typography>
          <Typography variant="body1">
            Pression: {weather.main.pressure} mbar
          </Typography>
          <Typography variant="body1">
            Vitesse du vent: {weather.wind.speed} km/h
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
