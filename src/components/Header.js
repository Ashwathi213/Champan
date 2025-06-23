import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';


const pages = ['Home', 'Reports', 'Uploads', 'Settings', 'Help'];

function Header({ onToggleSidebar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" elevation={2} sx={{ bgcolor: '#ffffff', color: '#030A76' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={onToggleSidebar} edge="start">
            <MenuIcon sx={{ color: '#030A76' }} />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#030A76' }}>
            AUREXUS
          </Typography>
        </Box>

        {/* Center Section */}
        <Box
          sx={{
            display: isSmall ? 'none' : 'flex',
            gap: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                color: '#030A76',
                fontWeight: 500,
                '&:hover': {
                  color: '#0d6efd',
                  backgroundColor: 'transparent',
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title="Notifications">
            <IconButton>
              <NotificationsIcon sx={{ color: '#030A76' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton>
              <LogoutIcon sx={{ color: '#030A76' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton onClick={handleMenuOpen}>
              <Avatar alt="User" src="/user.png" sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            Paper={{
              sx: {
                borderRadius: 2,
                boxShadow: 3,
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
