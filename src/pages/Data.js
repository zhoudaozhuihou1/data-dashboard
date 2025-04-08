import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardHeader, Divider } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';

const Data = () => {
  const stats = [
    { title: 'Total Datasets', value: '1,234', icon: StorageIcon },
    { title: 'Countries Covered', value: '45+', icon: PublicIcon },
    { title: 'Data Points', value: '2.5B+', icon: BarChartIcon },
    { title: 'Update Frequency', value: 'Daily', icon: TimelineIcon },
  ];

  const dataCategories = [
    {
      title: 'Financial Data',
      description: 'Comprehensive market data, trading volumes, and financial indicators',
      datasets: ['Stock Market Data', 'Forex Data', 'Commodities Data'],
      countries: ['US', 'UK', 'JP', 'EU', 'CN'],
    },
    {
      title: 'Economic Indicators',
      description: 'Macroeconomic indicators, GDP data, and economic forecasts',
      datasets: ['GDP Data', 'Inflation Rates', 'Employment Statistics'],
      countries: ['Global Coverage', '50+ Countries'],
    },
    {
      title: 'Market Research',
      description: 'Consumer behavior, market trends, and industry analysis',
      datasets: ['Consumer Surveys', 'Industry Reports', 'Market Forecasts'],
      countries: ['APAC', 'North America', 'Europe'],
    },
  ];

  return (
    <Container className="py-8">
      <Typography variant="h4" className="mb-6">
        Data Overview
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} className="mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center text-center">
                  <IconComponent className="text-primary mb-3" style={{ fontSize: 40 }} />
                  <Typography variant="h4" className="mb-2">{stat.value}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {stat.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Data Categories */}
      <Typography variant="h5" className="mb-4">
        Available Data Categories
      </Typography>
      <Grid container spacing={3}>
        {dataCategories.map((category, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="h-full">
              <CardHeader
                title={category.title}
                className="bg-blue-50"
              />
              <CardContent>
                <Typography variant="body1" className="mb-4">
                  {category.description}
                </Typography>
                <Typography variant="subtitle2" color="primary" className="mb-2">
                  Available Datasets:
                </Typography>
                <ul className="list-disc pl-5 mb-4">
                  {category.datasets.map((dataset, idx) => (
                    <li key={idx}>{dataset}</li>
                  ))}
                </ul>
                <Divider className="my-3" />
                <Typography variant="subtitle2" color="primary" className="mb-2">
                  Geographic Coverage:
                </Typography>
                <Box className="flex flex-wrap gap-2">
                  {category.countries.map((country, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {country}
                    </span>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Data;
