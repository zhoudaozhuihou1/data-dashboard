import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PlatformCard = ({ platform }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/platform/${platform.id}`);
  };

  return (
    <Card 
      className="cursor-pointer transform transition-transform duration-300 hover:scale-105 h-full"
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="140"
        image={platform.imageUrl}
        alt={platform.name}
        className="h-48 object-cover"
      />
      <CardContent>
        <Typography variant="h6" component="div" className="mb-2">
          {platform.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="mb-4">
          {platform.description}
        </Typography>
        <Box className="flex flex-wrap gap-2">
          {platform.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlatformCard;
