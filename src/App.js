import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Data from './pages/Data';
import DataProducts from './pages/DataProducts';
import DataSolutions from './pages/DataSolutions';

function App() {
  return (
    <Router>
      <Box className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/data-products" element={<DataProducts />} />
          <Route path="/data-solutions" element={<DataSolutions />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
