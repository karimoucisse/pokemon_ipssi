import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import PokemonCard from '../components/PokemonCard';
import listOfPokemons from '../data/pokemon.json';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Navigate, useNavigate } from 'react-router-dom';
const PokemonList = () => {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    const firstIndex = (page - 1) * 8;
    setPokemonArray(listOfPokemons.slice(firstIndex, firstIndex + 8));
    console.log(firstIndex);
  }, [page]);

  useEffect(() => {
    if (value.length > 0) {
      const newData = listOfPokemons.filter((element) =>
        element.name.fr.toLowerCase().includes(value.toLowerCase()),
      );
      setPokemonArray(newData);
    }
  }, [value]);

  if (pokemonArray.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAF9F8',
        }}
      >
        <CircularProgress size="100px" />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
      }}
    >
      <Stack direction="row" spacing={6}>
        <SearchBar setValue={setValue} placeHolder="Trouve ton Pokemon ..." />
        <Button
          onClick={() => navigate('/weathers')}
          variant="contained"
          sx={{ backgroundColor: '#1c2930', fontSize: '18px' }}
        >
          Page Meteo
        </Button>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
          gap: '40px',
        }}
      >
        {pokemonArray.map((pokemon, i) => (
          <PokemonCard pokemon={pokemon} key={i} />
        ))}
      </Box>
      <Box display="flex" width="100%" justifyContent="center">
        <Pagination
          count={Math.round(listOfPokemons.length / 8)}
          color="primary"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default PokemonList;
