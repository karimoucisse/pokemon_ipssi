import { useEffect, useState } from 'react';
import { getWeatherDatas } from '../data/Weather';
import SearchBar from '../components/SearchBar';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import WeatherCard from '../components/weather/WeatherCard';
import SelectValue from '../components/SelectValue';
import HouseIcon from '@mui/icons-material/House';
import { useNavigate } from 'react-router-dom';
const Weathers = () => {
  const [value, setValue] = useState();
  const [weatherData, setWeathersData] = useState([]);
  const [selectValue, setSelectValue] = useState('celsius');
  const navigate = useNavigate();
  const getData = async () => {
    const data = await getWeatherDatas(value, selectValue);
    const dataArray = data ? [data] : [];
    setWeathersData(dataArray);
  };
  useEffect(() => {
    if (value) {
      getData();
    }
  }, [value, selectValue]);

  const onSelectChange = (value) => {
    setSelectValue(value);
  };

  return (
    <Box sx={{ padding: '40px 100px', backgroundColor: '#FAF9F8' }}>
      <HouseIcon
        onClick={() => navigate('/')}
        color="#1c2930"
        fontSize="large"
        sx={{ cursor: 'pointer', marginBottom: '10px' }}
      />
      <Stack direction="row" spacing={3}>
        <SearchBar setValue={setValue} placeHolder="Meteo" />
        <SelectValue
          onChange={onSelectChange}
          label="Unité de mesure"
          value={selectValue}
        />
      </Stack>
      <Box mt={6}>
        <Box
          sx={{
            minHeight: '63vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!weatherData || weatherData.length === 0 ? (
            <Typography variant="h4">Il n'y a pas de données</Typography>
          ) : (
            weatherData.map((weather, i) => (
              <WeatherCard key={i} weather={weather} unit={selectValue} />
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Weathers;
