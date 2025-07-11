import React from 'react';
import aboutImg from '../assets/about-img.png';
import { Box, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Divider, Stack, Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import { Link as RouterLink } from 'react-router-dom';


const AboutSection = () => {
  return (
    <Box component="section" sx={{ bgcolor: 'white', py: 8, px: 2 }}>
      <Grid container spacing={6} alignItems="center" maxWidth="lg" mx="auto">
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <Box component="img" src={aboutImg} alt="About TripBargain" sx={{ borderRadius: 3, width: '100%' }} />
        </Grid>
        {/* Right Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="warning.main" mb={1} display="block">About TripBargain</Typography>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            About <Box component="span" color="warning.main" fontWeight="bold" display="inline">TripBargain Travel</Box> App
          </Typography>
          <List sx={{ pl: 2, mb: 2 }}>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="Book cabs, hotels, and activities at the lowest prices with TripBargain." primaryTypographyProps={{ fontSize: 15, color: 'text.secondary' }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="Instant deals, exclusive offers, and real-time price comparison for your journey." primaryTypographyProps={{ fontSize: 15, color: 'text.secondary' }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="Trusted by thousands of travelers across India for safe and affordable rides." primaryTypographyProps={{ fontSize: 15, color: 'text.secondary' }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}><CheckCircleIcon color="success" /></ListItemIcon>
              <ListItemText primary="24/7 customer support and verified drivers for a seamless experience." primaryTypographyProps={{ fontSize: 15, color: 'text.secondary' }} />
            </ListItem>
          </List>
          <Divider sx={{ my: 2 }} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <Button
              component="a"
                              href="/app.zip"
              variant="contained"
              color="warning"
              size="large"
              download
              sx={{ mt: 2 }}
            >
              Download APK
            </Button>
            
        
              <Link component={RouterLink} to="/about-us" variant="contained" color="warning" size="large" startIcon={<InfoIcon />}> Learn More</Link>
            
          </Stack>
          <Typography variant="body2" color="grey.600" mt={3}>
            Need help? Visit our <Link component={RouterLink} to="/support"  color="warning.main">Support Center</Link> or read our <Link component={RouterLink} to="/PrivacyPolicy" color="warning.main">Privacy Policy</Link>.
          </Typography>
        </Grid>
      </Grid>
      {/* Timeline Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 6, mt: 6, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" align="center" mb={4} color="warning.main">
          Our Journey
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
              {/* Timeline Items */}
              <Box sx={{ flex: 1, textAlign: 'center', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.04)' } }}>
                <Typography variant="h6" color="warning.main">2025</Typography>
                <Typography variant="body2">TripBargain founded</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, mx: 2 }} />
              <Box sx={{ flex: 1, textAlign: 'center', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.04)' } }}>
                <Typography variant="h6" color="warning.main">2025</Typography>
                <Typography variant="body2">Reached 10,000+ users</Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, mx: 2 }} />
              <Box sx={{ flex: 1, textAlign: 'center', transition: 'transform 0.5s', ':hover': { transform: 'scale(1.04)' } }}>
                <Typography variant="h6" color="warning.main">2025</Typography>
                <Typography variant="body2">Launched & Hotel activity booking</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};

export default AboutSection;
