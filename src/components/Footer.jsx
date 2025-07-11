import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Button,
  TextField,
  Stack,
  IconButton,
  SvgIcon
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import logo from '../assets/logo.png';

const socialLinks = [
  { icon: FaTwitter, url: "https://www.twitter.com/TripBargain01", label: "Twitter" },
  { icon: FaFacebook, url: "https://www.facebook.com/TripBargain", label: "Facebook" },
  { icon: FaInstagram, url: "https://www.instagram.com/TripBargain", label: "Instagram" },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'grey.200',
        pt: 10,
        pb: 6,
        mt: 12
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="space-between">
          {/* Brand */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="TripBargain Logo" style={{ height: 50 }} />
              </Box>
              <Typography variant="h6" fontWeight="bold">TripBargain</Typography>
            </Stack>
            <Typography variant="body2" color="grey.400" mb={2}>
              Your trusted ride partner. Fast, safe, and <br></br>reliable cab booking for everyone, everywhere.
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map(({ icon: Icon, url, label }, i) => (
                <IconButton
                  key={i}
                  href={url}
                  aria-label={label}
                  sx={{
                    color: 'grey.300',
                    transition: '0.3s',
                    '&:hover': { color: 'orange' }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography fontWeight="bold" color="orange" mb={2}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {[
                ['/features', 'Features'],
                ['/how-it-works', 'How It Works'],
                ['/about-us', 'About Us'],
                ['/testimonials', 'Testimonials'],
                ['/blog', 'Blog'],
                ['/support', 'Support']
              ].map(([href, label], i) => (
                <Link
                  key={i}
                  component={RouterLink}
                  to={href}
                  underline="hover"
                  color="inherit"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': { color: 'orange' }
                  }}
                >
                  <CheckCircleIcon fontSize="small" sx={{ color: 'orange' }} />
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Download App */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography fontWeight="bold" color="orange" mb={2}>
              Get the App
            </Typography>
            <Stack spacing={2}>
              <Button
                component="a"
                href="/app.zip"
                variant="contained"
                color="warning"
                download
                sx={{ textTransform: 'none', fontWeight: 500 }}
              >
                Download APK
              </Button>
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography fontWeight="bold" color="orange" mb={2}>
              Newsletter
            </Typography>
            <Stack component="form" spacing={1}>
              <TextField
                type="email"
                placeholder="Your email address"
                size="small"
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    bgcolor: 'grey.800',
                    color: 'grey.100',
                    borderRadius: 1
                  }
                }}
              />
              <Button type="submit" variant="contained" color="warning" size="small">
                Subscribe
              </Button>
            </Stack>
            <Typography variant="caption" color="grey.500" mt={1}>
              Get updates & exclusive offers.
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Text */}
        <Typography
          align="center"
          variant="caption"
          color="grey.400"
          mt={8}
          display="block"
        >
          &copy; {new Date().getFullYear()} TripBargain. All rights reserved. | Designed by{' '}
          <Link
            href="https://matchbestsoftware.com/"
            color="primary.main"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 600 }}
          >
            Matchbest Software Pvt Ltd.
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
