import React, { useState } from 'react';
import {
  Drawer,
  List,
  
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
  Divider,
  Tooltip,
  IconButton,
} from '@mui/material';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const years = Array.from({ length: 15 }, (_, i) => 2024 - i);

function Sidebar() {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, years.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(prev - 5, 5));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          bgcolor: '#030A76',
          color: '#fff',
          borderRight: 'none',
          backgroundImage: 'linear-gradient(to bottom, #030A76, #041452)',
          boxShadow: '2px 0 12px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Logo and Title */}
      <Toolbar sx={{ justifyContent: 'center', pt: 2, pb: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/Aurexuslogo.png`}
            alt="Logo"
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              mb: 1,
            }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Invoices
          </Typography>
        </Box>
      </Toolbar>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 2 }} />

      {/* Year List */}
      <List sx={{ px: 1 }}>
        {years.slice(0, visibleCount).map((year, idx) => (
          <Tooltip key={year} title={`Invoices from ${year}`} placement="right">
            <ListItemButton
              selected={idx === 0}
              sx={{
                my: 0.8,
                px: 2,
                borderRadius: '5px',
                color: '#fff',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.3s ease',
                fontWeight: 500,
                fontSize: 14,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '0%',
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  zIndex: 0,
                  transition: 'width 0.3s ease-in-out',
                },
                '&:hover::before': {
                  width: '100%',
                  
                },
                '& .MuiListItemIcon-root': {
                  color: 'inherit',
                  zIndex: 1,
                },
                '& .MuiTypography-root': {
                  zIndex: 1,
                },
                '&.Mui-selected': {
                  bgcolor: '#ffffff',
                  color: '#030A76',
                  fontWeight: 'bold',
                  boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
                  '& .MuiListItemIcon-root': {
                    color: '#030A76',
                  },
                },
              }}
            >

            <ListItemIcon>
                <EventNoteIcon />
            </ListItemIcon>

              <ListItemText
                primary={year}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: 14,
                      fontWeight: 600,
                    },
                  },
                }}
              />
            </ListItemButton>
          </Tooltip>
        ))}
      </List>

      {/* Show More / Less Controls */}
      <Box sx={{ textAlign: 'center', mt: 1 }}>
        {visibleCount < years.length && (
          <IconButton onClick={handleShowMore} sx={{ color: '#fff' }}>
            <ExpandMoreIcon />
          </IconButton>
        )}
        {visibleCount > 5 && (
          <IconButton onClick={handleShowLess} sx={{ color: '#fff' }}>
            <ExpandLessIcon />
          </IconButton>
        )}
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {/* Footer */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)'}} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 3,
        }}
      >
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/Logo2.png`}
          alt="Logo"
          sx={{
            width: 200,
            height: 60,
            // borderRadius: '50%',
            // border: '2px solid white',
            mb: 2,
          }}
        />
        <Typography variant="caption" color="rgba(255,255,255,0.6)">
          © 2025 Aurexus
        </Typography>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
