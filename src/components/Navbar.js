import React, { useState } from 'react';
import { Tabs, Tab, AppBar, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <AppBar position="static" color="default" className="bg-white shadow-md">
      <Box className="container mx-auto">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className="min-h-[64px]"
        >
          <Tab label="Home" value="/" className="font-medium" />
          <Tab label="Data" value="/data" className="font-medium" />
          <Tab label="Data Products" value="/data-products" className="font-medium" />
          <Tab label="Data Solutions" value="/data-solutions" className="font-medium" />
        </Tabs>
      </Box>
    </AppBar>
  );
};

export default Navbar;
