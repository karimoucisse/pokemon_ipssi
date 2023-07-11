import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import React from 'react';

const SelectValue = ({ data, onChange, label, value }) => {
  return (
    <FormControl sx={{ width: '200px' }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="celsius">Celsius</MenuItem>
        <MenuItem value="fahrenheit">Fahrenheit</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectValue;
