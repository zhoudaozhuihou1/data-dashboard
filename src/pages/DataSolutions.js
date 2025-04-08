import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DataSolutions = () => {
  const solutions = [
    {
      title: 'Enterprise Data Warehouse',
      description: 'Unified data storage and analytics solution for enterprise-scale operations',
      architecture: '/edw-architecture.jpg',
      features: [
        'Scalable data storage',
        'Real-time processing',
        'Advanced analytics',
        'Data governance',
      ],
      technologies: ['Snowflake', 'AWS', 'Databricks', 'Apache Spark'],
      useCase: 'Ideal for large enterprises needing to consolidate data from multiple sources and perform complex analytics.',
    },
    {
      title: 'Real-time Analytics Platform',
      description: 'Stream processing and real-time analytics solution for immediate insights',
      architecture: '/realtime-architecture.jpg',
      features: [
        'Stream processing',
        'Real-time dashboards',
        'Alerts & monitoring',
        'Event processing',
      ],
      technologies: ['Apache Kafka', 'Apache Flink', 'Elasticsearch', 'Grafana'],
      useCase: 'Perfect for organizations requiring immediate insights from streaming data sources.',
    },
    {
      title: 'Data Lake Solution',
      description: 'Flexible and scalable data lake architecture for storing and analyzing diverse data types',
      architecture: '/datalake-architecture.jpg',
      features: [
        'Raw data storage',
        'Data cataloging',
        'Schema evolution',
        'ML capabilities',
      ],
      technologies: ['Azure Data Lake', 'Delta Lake', 'Apache Hudi', 'MLflow'],
      useCase: 'Suitable for organizations dealing with large volumes of diverse data types requiring flexible analysis.',
    },
  ];

  return (
    <Container className="py-8">
      <Typography variant="h4" className="mb-2">
        Data Solutions
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" className="mb-8">
        Enterprise-grade data solutions designed for scalability and performance
      </Typography>

      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <CardMedia
                    component="div"
                    className="h-full min-h-[300px] bg-gray-100 flex items-center justify-center"
                  >
                    <Typography variant="h6" color="textSecondary">
                      Architecture Diagram
                    </Typography>
                  </CardMedia>
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent className="h-full">
                    <Typography variant="h5" className="mb-3">
                      {solution.title}
                    </Typography>
                    <Typography variant="body1" className="mb-4">
                      {solution.description}
                    </Typography>

                    <Typography variant="subtitle2" color="primary" className="mb-2">
                      Key Features:
                    </Typography>
                    <ul className="list-disc pl-5 mb-4">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="mb-1">{feature}</li>
                      ))}
                    </ul>

                    <Typography variant="subtitle2" color="primary" className="mb-2">
                      Technologies Used:
                    </Typography>
                    <Box className="flex flex-wrap gap-2 mb-4">
                      {solution.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          variant="outlined"
                          color="primary"
                          size="small"
                        />
                      ))}
                    </Box>

                    <Typography variant="subtitle2" color="primary" className="mb-2">
                      Use Case:
                    </Typography>
                    <Typography variant="body2" className="mb-4">
                      {solution.useCase}
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Explore Solution
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DataSolutions;
