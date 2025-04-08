import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import HeroSection from '../components/HeroSection';
import PlatformCard from '../components/PlatformCard';

// Mock data - replace with actual API call
const platforms = [
  {
    id: 1,
    name: 'Data Analytics Platform',
    description: 'Comprehensive analytics solution for big data processing and visualization',
    imageUrl: '/platform1.jpg',
    tags: ['Analytics', 'Big Data', 'Visualization']
  },
  {
    id: 2,
    name: 'Machine Learning Platform',
    description: 'End-to-end ML platform for model development and deployment',
    imageUrl: '/platform2.jpg',
    tags: ['ML', 'AI', 'AutoML']
  },
  {
    id: 3,
    name: 'Data Warehouse',
    description: 'Modern cloud data warehouse for enterprise-scale analytics',
    imageUrl: '/platform3.jpg',
    tags: ['Storage', 'Cloud', 'Enterprise']
  },
  {
    id: 4,
    name: 'Data Integration Platform',
    description: 'Connect and integrate data from multiple sources seamlessly',
    imageUrl: '/platform4.jpg',
    tags: ['ETL', 'Integration', 'Pipeline']
  },
  {
    id: 5,
    name: 'Real-time Analytics',
    description: 'Process and analyze streaming data in real-time',
    imageUrl: '/platform5.jpg',
    tags: ['Streaming', 'Real-time', 'Processing']
  },
  {
    id: 6,
    name: 'Data Governance Platform',
    description: 'Ensure data quality, security, and compliance',
    imageUrl: '/platform6.jpg',
    tags: ['Governance', 'Security', 'Compliance']
  }
];

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <Container className="py-12">
        <Grid container spacing={4}>
          {platforms.map((platform) => (
            <Grid item xs={12} sm={6} md={4} key={platform.id}>
              <PlatformCard platform={platform} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
