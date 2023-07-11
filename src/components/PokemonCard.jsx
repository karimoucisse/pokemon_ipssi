import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { colorType } from '../data/colorType';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: 300,
        mb: 4,
        boxShadow:
          'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        borderRadius: '10px',
      }}
      onClick={() => navigate(`/pokemon/${pokemon.pokedexId}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="400"
          image={pokemon.sprites.regular}
          alt="green iguana"
        />
        <CardContent
          sx={{
            backgroundColor: '#1c2930',
            width: '100%',
            pl: 4,
          }}
        >
          <Typography gutterBottom variant="h5" component="div" color="white">
            {pokemon.name.fr}
          </Typography>
          <Box display="flex" gap={2} alignItems="center">
            <Typography variant="body2" color="white">
              Types:
            </Typography>
            <Stack direction="row" spacing={1}>
              {pokemon.types.map((type) => (
                <Avatar
                  key={type}
                  alt="Remy Sharp"
                  src={type.image}
                  sx={{ width: 24, height: 24 }}
                  variant="square"
                />
              ))}
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
