import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const DetailsText = ({ cle, value }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body1">{cle}: </Typography>
      <Box
        sx={{
          backgroundColor: '#1c2930',
          borderRadius: '5px',
          px: 2,
          py: 0.3,
        }}
      >
        <Typography variant="body1" color="white">
          {value}
        </Typography>
      </Box>
    </Stack>
  );
};

export default DetailsText;
