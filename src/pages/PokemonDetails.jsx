import { useNavigate, useParams } from 'react-router-dom';
import listOfPokemons from '../data/pokemon.json';
import { Box, Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import Details from '../components/pokemonDetails/Details';
import HouseIcon from '@mui/icons-material/House';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  // max-height: 100vh;
`;
const PokemonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const pokemon = listOfPokemons.find(
    (produit) => produit.pokedexId.toString() === id,
  );
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <HouseIcon
        onClick={() => navigate('/')}
        color="#1c2930"
        fontSize="large"
        sx={{ margin: '20px', cursor: 'pointer' }}
      />
      <Box flex={1} sx={{ position: 'relative' }}>
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '90px',
          }}
          spacing={'200px'}
        >
          {pokemon.evolution.pre && (
            <Box
              display="flex"
              sx={{
                cursor: pokemon.evolution.pre ? 'pointer' : 'not-allowed',
                gap: '15px',
              }}
              onClick={() => {
                pokemon.evolution.pre &&
                  navigate(`/pokemon/${pokemon.evolution.pre[0].pokedexId}`);
              }}
            >
              <ArrowBackIosIcon />
              <Typography>Evolution précedente</Typography>
            </Box>
          )}
          {pokemon.evolution.next && (
            <Box
              display="flex"
              sx={{
                cursor: pokemon.evolution.next ? 'pointer' : 'not-allowed',
                gap: '15px',
              }}
              onClick={() => {
                pokemon.evolution.next &&
                  navigate(`/pokemon/${pokemon.evolution.next[0].pokedexId}`);
              }}
            >
              <Typography>Evolution suivante</Typography>
              <ArrowForwardIosIcon />
            </Box>
          )}
        </Stack>
        <Image src={pokemon.sprites.regular} />
      </Box>
      <Details pokemon={pokemon} />
    </Stack>
  );
};

export default PokemonDetails;
