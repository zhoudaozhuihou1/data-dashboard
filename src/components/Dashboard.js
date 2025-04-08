import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import api from '../services/api';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('/api/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Box className="p-6">
      <Typography variant="h4" className="mb-6">
        Welcome, {user?.name}!
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-4">
              User Information
            </Typography>
            {userData && (
              <Card>
                <CardContent>
                  <Typography variant="body1" className="mb-2">
                    Email: {userData.email}
                  </Typography>
                  <Typography variant="body1" className="mb-2">
                    Role: {userData.role}
                  </Typography>
                  <Typography variant="body1">
                    Member since: {new Date(userData.createdAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <Paper className="p-4">
            <Typography variant="h6" className="mb-4">
              Recent Activity
            </Typography>
            {/* Add your activity content here */}
            <Typography variant="body1" color="textSecondary">
              No recent activity to display.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
