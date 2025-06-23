import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Drawer,
  Divider,
  Grid,
} from '@mui/material';

function InvoiceDrawer({ open, onClose, invoice, onSave }) {
  const [editInvoice, setEditInvoice] = useState(invoice);

  useEffect(() => {
    setEditInvoice(invoice);
  }, [invoice]);

  const handleSubmit = () => {
    onSave(editInvoice);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: '65%',
            p: 4,
            bgcolor: '#fff',
            fontFamily: 'monospace',
          },
        },
      }}
    >
      <Box autoComplete="off">
        {/* Header */}
        <Box sx={{ width: '100%'}}>
          <Grid container spacing={2} sx={{ width: '100%', display:'flex',justifyContent:'space-between' }}>
            {/* Left Section (50%) */}
            <Grid item xs={12} md={6}>
              <Typography fontWeight="bold" sx={{ fontFamily: 'monospace'}}>Issued To</Typography>
              <Typography sx={{ fontFamily: 'monospace'}}>{editInvoice.issuedTo || 'Anu Auto Stores'}</Typography>
              <Typography sx={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
                  GSTIN : 33AQZPS2365E1ZE{'\n'}
                  POS   : Tamil Nadu
              </Typography>
            </Grid>

            {/* Right Section (50%) */}
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
                Billing & Shipping Address :{'\n'}
                Anu Auto Stores{'\n'}
                Adyar{'\n'}
                Mobile : 9823561230{'\n'}
                Phone  : 044568798899{'\n'}
                anu@gmail.com
              </Typography>

            </Grid>
          </Grid>
        </Box>


       
        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

     
        <Box sx={{ display: 'flex', fontWeight: 'bold', mb: 1 }}>
          <Box sx={{ width: '5%' }}>SN</Box>
          <Box sx={{ width: '25%' }}>Item Desc</Box>
          <Box sx={{ width: '10%' }}>Qty</Box>
          <Box sx={{ width: '15%' }}>Rate(Rs)</Box>
          <Box sx={{ width: '15%' }}>D/C(Rs)</Box>
          <Box sx={{ width: '15%' }}>Tax</Box>
          <Box sx={{ width: '15%' }}>Amount(Rs)</Box>
        </Box>

        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

       
        <Box sx={{ display: 'flex', mb: 1 }}>
          <Box sx={{ width: '5%' }}>1</Box>
          <Box sx={{ width: '25%' }}>Chakkar - 3604</Box>
          <Box sx={{ width: '10%' }}>1</Box>
          <Box sx={{ width: '15%' }}>250.00</Box>
          <Box sx={{ width: '15%' }}>25.00</Box>
          <Box sx={{ width: '15%' }}>GST 5%</Box>
          <Box sx={{ width: '15%' }}>225.00</Box>
        </Box>

        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

        <Box sx={{ fontFamily: 'monospace' }}>
          <Box sx={{ display: 'flex', mb: 1 }}>
            <Box sx={{ width: '85%', display: 'flex', justifyContent: 'flex-end', mr: 2 }}>Sub Total</Box>
            <Box sx={{ width: '15%', display: 'flex', }}>
              <Box>225</Box>
              <Box sx={{textAlign:'left' }}>.00</Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

          <Box sx={{ display: 'flex', mb: 1 }}>
            <Box sx={{ width: '85%', display: 'flex', justifyContent: 'flex-end', mr: 2 }}>CGST 2.50 % 225.00</Box>
            <Box sx={{ width: '15%', display: 'flex', }}>
              <Box>5</Box>
              <Box sx={{textAlign:'left' }}>.63</Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', mb: 1 }}>
            <Box sx={{ width: '85%', display: 'flex', justifyContent: 'flex-end', mr: 2 }}>SGST 2.50 % 225.00</Box>
            <Box sx={{ width: '15%', display: 'flex', }}>
              <Box>5</Box>
              <Box sx={{textAlign:'left' }}>.63</Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

          <Box sx={{ display: 'flex', mb: 1 }}>
            <Box sx={{ width: '85%', display: 'flex', justifyContent: 'flex-end', mr: 2 }}>Total</Box>
            <Box sx={{ width: '15%', display: 'flex', }}>
              <Box>236</Box>
              <Box sx={{textAlign:'left' }}>.00</Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

        {/* Amount in words */}
        <Typography fontWeight="bold" gutterBottom sx={{ fontFamily: 'monospace' }}>
          Amount (in words) :
        </Typography>
        <Typography sx={{ mb: 2, fontFamily: 'monospace'  }}>
          {editInvoice.description || 'Rs Two Hundred and Thirty Six Rupees Twenty Six Paise only'}
        </Typography>

        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

        {/* Notes */}
        <Typography fontWeight="bold" gutterBottom sx={{ fontFamily: 'monospace' }}>
          Notes
        </Typography>
        <Typography sx={{ fontFamily: 'monospace' }}>You are a Valuable customer</Typography>

        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

        {/* Signatures */}
        <Box display="flex" justifyContent="space-between" mt={3} sx={{ fontFamily: 'monospace' }}>
          <Typography sx={{ fontFamily: 'monospace' }}>Customer Signature</Typography>
          <Typography sx={{ fontFamily: 'monospace' }}>E & O.E</Typography>
          <Typography sx={{ fontFamily: 'monospace' }}>Authorized Signature</Typography>
        </Box>

        {/* Buttons (hidden during print) */}
        <Box
          display="flex"
          justifyContent="center"
          mt={4}
          gap={2}
          sx={{
            '@media print': {
              display: 'none',
              fontFamily: 'monospace'
            },
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{background:'#04105F'}}>
            Save
          </Button>
          <Button variant="outlined" color="error" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

export default InvoiceDrawer;
