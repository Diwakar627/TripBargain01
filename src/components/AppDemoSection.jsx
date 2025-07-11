import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Fade
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.5); }
  70% { box-shadow: 0 0 0 20px rgba(255, 152, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0); }
`;

const AppDemoSection = () => {
  return (
    <Box component="section" sx={{ bgcolor: 'grey.100', py: 10, px: 2 }}>
      <Container maxWidth="md">
        {/* Section Title */}
        <Fade in timeout={800}>
          <Typography
            variant="overline"
            color="warning.main"
            mb={3}
            display="block"
            textAlign="center"
            sx={{ letterSpacing: 2 }}
          >
            LIVE APP DEMO
          </Typography>
        </Fade>

        {/* Content */}
        <Fade in timeout={1200}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              See the TripBargain App <span style={{ color: '#FFA726' }}>In Action</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Our intuitive mobile app lets you book rides instantly, track your driver in real-time, and enjoy safe, <br></br>reliable transport—all in just a few taps.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Watch this short demo to explore how TripBargain simplifies your travel with cutting-edge features  <br></br>and a user-friendly design.
            </Typography>
          </Box>
        </Fade>

        {/* Video */}
        <Fade in timeout={1400}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 4,
                animation: `${pulse} 2.5s infinite`,
                width: '100%',
                maxWidth: 280,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: 20,
                  border: '4px solid #FFA726'
                }}
              >
                <source src="/app-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Box>
        </Fade>

        {/* Button */}
        <Box textAlign="center">
          <Button
            variant="contained"
            color="warning"
            startIcon={<PlayCircleOutlineIcon />}
            size="large"
            href="/app-demo.mp4"
            target="_blank"
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Watch Full Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AppDemoSection;
