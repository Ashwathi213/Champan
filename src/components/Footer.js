import React from 'react';
import { Pagination, Paper } from '@mui/material';

function Footer() {
  return (
    <Paper
      elevation={4}
      square
      sx={{
        position: 'sticky',
        bottom: 0,
        zIndex: 1100,
        width: '100%',
        py: 1,
        bgcolor: '#ffffff',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.1)',
        borderTop: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pagination
        count={3}
        page={1}
        shape="rounded"
        color="primary"
        size="large"
        sx={{
          '& .MuiPaginationItem-root': {
            fontWeight: 'bold',
            borderRadius: '10px',
            border: '1px solid #ccc',
            color: '#030A76',
            '&.Mui-selected': {
              backgroundColor: '#030A76',
              color: '#fff',
              borderColor: '#030A76',
              boxShadow: '0 0 6px rgba(3, 10, 118, 0.4)',
            },
            '&:hover': {
              backgroundColor: '#e6e6ff',
            },
          },
        }}
      />
    </Paper>
  );
}

export default Footer;
