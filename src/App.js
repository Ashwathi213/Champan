import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import InvoiceGrid from './components/ImageViewer';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header onToggleSidebar={handleSidebarToggle} />
      <Box sx={{ display: 'flex', flex: 1 }}>
        {isSidebarOpen && <Sidebar />}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: '#f5f7fb',
            transition: 'margin 0.3s',
            width: isSidebarOpen ? 'calc(100% - 220px)' : '100%',
          }}
        >
          <InvoiceGrid />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
