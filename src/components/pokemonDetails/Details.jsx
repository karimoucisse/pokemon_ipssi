import { Box, Stack, Typography } from '@mui/material';
import DetailsText from './DetailsText';

const Details = ({ pokemon }) => {
  return (
    <Box flex={1} py={6} pl={9}>
      <Typography variant="h3" textAlign="center">
        {pokemon.name.fr}
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        marginBottom="50px"
      >{`(${pokemon.name.jp})`}</Typography>
      <Box
        sx={{
          px: '60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <DetailsText cle="Categorie" value={pokemon.category} />
        <DetailsText cle="Points de vie (PV)" value={pokemon.stats.hp} />
        <Stack direction="row" spacing={4}>
          <DetailsText cle="Attaque" value={pokemon.stats.atk} />
          <DetailsText cle="Défense" value={pokemon.stats.def} />
        </Stack>
        <Stack direction="row" spacing={4}>
          <DetailsText cle="Taille" value={pokemon.height} />
          <DetailsText cle="Poid" value={pokemon.weight} />
        </Stack>
        <DetailsText cle="Attaque Spéciale" value={pokemon.stats.spe_atk} />
        <DetailsText cle="Défense Spéciale" value={pokemon.stats.spe_def} />
        <DetailsText cle="Vitesse" value={pokemon.stats.vit} />
      </Box>
    </Box>
  );
};

export default Details;
