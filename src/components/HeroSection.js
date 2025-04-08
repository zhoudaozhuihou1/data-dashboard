import React, { useState } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      className="relative h-[400px] bg-cover bg-center"
      sx={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/hero-background.jpg")',
      }}
    >
      <Box className="absolute inset-0 flex flex-col items-center justify-center">
        <Box className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">Discover Data Platforms</h1>
          <p className="text-xl">Find the perfect data solution for your needs</p>
        </Box>
        <Box className="w-full max-w-2xl px-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search data platforms..."
            value={searchQuery}
            onChange={handleSearch}
            className="bg-white rounded-lg"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
