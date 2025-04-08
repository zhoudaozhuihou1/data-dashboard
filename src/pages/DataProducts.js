import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const DataProducts = () => {
  const products = [
    {
      title: 'Market Intelligence Dashboard',
      description: 'Real-time market analysis and visualization platform with customizable widgets and automated reporting features.',
      features: [
        'Real-time market data visualization',
        'Customizable dashboard layouts',
        'Automated report generation',
        'Advanced filtering and search',
      ],
      image: '/market-intelligence.jpg',
      icon: AnalyticsIcon,
    },
    {
      title: 'Economic Forecasting Tool',
      description: 'Advanced econometric modeling and forecasting system using machine learning algorithms.',
      features: [
        'ML-powered forecasting models',
        'Interactive scenario analysis',
        'Historical trend comparison',
        'Export capabilities',
      ],
      image: '/forecasting-tool.jpg',
      icon: TimelineIcon,
    },
    {
      title: 'Risk Analytics Suite',
      description: 'Comprehensive risk assessment and management platform for financial institutions.',
      features: [
        'Risk exposure analysis',
        'Compliance monitoring',
        'Real-time alerts',
        'Risk reporting',
      ],
      image: '/risk-analytics.jpg',
      icon: AssessmentIcon,
    },
    {
      title: 'Investment Analytics Platform',
      description: 'Portfolio analysis and optimization tool with advanced investment strategies.',
      features: [
        'Portfolio optimization',
        'Performance attribution',
        'Investment research',
        'Backtesting capabilities',
      ],
      image: '/investment-analytics.jpg',
      icon: TrendingUpIcon,
    },
  ];

  return (
    <Container className="py-8">
      <Typography variant="h4" className="mb-2">
        Data Products
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" className="mb-8">
        Explore our suite of data-driven solutions designed for modern business needs
      </Typography>

      <Grid container spacing={4}>
        {products.map((product, index) => {
          const IconComponent = product.icon;
          return (
            <Grid item xs={12} md={6} key={index}>
              <Card className="h-full">
                <CardMedia
                  component="div"
                  className="h-48 bg-blue-50 flex items-center justify-center"
                >
                  <IconComponent style={{ fontSize: 80 }} className="text-blue-500" />
                </CardMedia>
                <CardContent>
                  <Typography variant="h5" className="mb-3">
                    {product.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" className="mb-4">
                    {product.description}
                  </Typography>
                  <Typography variant="subtitle2" color="primary" className="mb-2">
                    Key Features:
                  </Typography>
                  <ul className="list-disc pl-5 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-2"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default DataProducts;
