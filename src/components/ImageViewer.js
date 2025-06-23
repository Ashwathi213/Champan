// import { useState } from 'react';
// import {
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   CardMedia,
//   Box,
//   Dialog,
//   DialogContent,
//   IconButton,
//   Drawer,
//   Divider,
// } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
// import CloseIcon from '@mui/icons-material/Close';

// // Sample invoice data with full editable fields
// const initialInvoices = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   name: `Invoice_2024_0${i + 1}.png`,
//   image: '/image.png', // Replace with real image path
//   date: '2024-06-20',
//   amount: 236.26,
//   description: 'Rs Two Hundred and Thirty Six Rupees Twenty Six Paise only',
// }));

// function InvoiceGrid() {
//   const [invoices, setInvoices] = useState(initialInvoices);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [editDrawerOpen, setEditDrawerOpen] = useState(false);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);

//   const handleView = (image) => {
//     setSelectedImage(image);
//     setOpenModal(true);
//   };

//   const handleEdit = (invoice) => {
//     setSelectedInvoice({ ...invoice }); // clone to avoid direct mutation
//     setEditDrawerOpen(true);
//   };

//   const handleClose = () => {
//     setOpenModal(false);
//     setSelectedImage(null);
//   };

//   const handleSave = () => {
//     setInvoices((prev) =>
//       prev.map((inv) => (inv.id === selectedInvoice.id ? selectedInvoice : inv))
//     );
//     setEditDrawerOpen(false);
//   };

//   return (
//     <Box sx={{ px: 1, py: 1, display:'flex', justifyContent:"center", alignItems:"center"}}>
//       <Grid container spacing={1} sx={{display:'flex', justifyContent:"left",alignItems:'center'}}>
//         {invoices.map((invoice) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={invoice.id} sx={{display:'flex', justifyContent:"left",alignItems:'left'}}>
//             <Card
//               elevation={6}
//               sx={{
//                 borderRadius: 4,
//                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                 '&:hover': {
//                   transform: 'translateY(-4px)',
//                   boxShadow: '0 8px 20px rgba(0,0,0,0.15)',

//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#030A76', mb: 1 }}>
//                   {invoice.name}
//                 </Typography>

//                 <Box
//                   sx={{
//                     overflow: 'hidden',
//                     borderRadius: 2,
//                     '& img': {
//                       transition: 'transform 0.4s ease',
//                     },
//                     '&:hover img': {
//                       transform: 'scale(1.05)',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={invoice.image}
//                     alt="Invoice"
//                     height="160"
//                     sx={{ borderRadius: 2, objectFit: 'cover', width: '100%' }}
//                   />
//                 </Box>
//               </CardContent>

//               <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   startIcon={<VisibilityIcon />}
//                   onClick={() => handleView(invoice.image)}
//                   sx={{
//                     bgcolor: '#030A76',
//                     borderRadius: 2,
//                     textTransform: 'none',
//                     fontWeight: 500,
//                     '&:hover': {
//                       bgcolor: '#02124d',
//                     },
//                   }}
//                 >
//                   View
//                 </Button>

//                 <Button
//                   size="small"
//                   variant="contained"
//                   startIcon={<EditIcon />}
//                   onClick={() => handleEdit(invoice)}
//                   sx={{
//                     bgcolor: '#28a745',
//                     borderRadius: 2,
//                     textTransform: 'none',
//                     fontWeight: 500,
//                     '&:hover': {
//                       bgcolor: '#218838',
//                     },
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Fullscreen View Modal */}
//       <Dialog
//         fullScreen
//         open={openModal}
//         onClose={handleClose}
//         slotProps={{
//           backdrop: {
//             sx: { backgroundColor: 'rgba(0,0,0,0.6)' },
//           },
//           paper: {
//             sx: {
//               background: 'transparent',
//               boxShadow: 'none',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             },
//           },
//         }}
//       >
//         <IconButton
//           onClick={handleClose}
//           sx={{
//             position: 'absolute',
//             top: 16,
//             right: 16,
//             color: '#fff',
//             zIndex: 9999,
//             backgroundColor: 'rgba(206, 10, 10, 0.96)',
//             '&:hover': {
//               color: 'black',
//               background: 'rgba(206, 10, 10, 0.96)',
//             },
//           }}
//         >
//           <CloseIcon />
//         </IconButton>

//         <DialogContent
//           sx={{
//             p: 0,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '100%',
//           }}
//         >
//           {selectedImage && (
//             <Box
//               component="img"
//               src={selectedImage}
//               alt="Invoice Full View"
//               sx={{
//                 maxHeight: '90vh',
//                 maxWidth: '90vw',
//                 objectFit: 'contain',
//                 borderRadius: 2,
//                 boxShadow: '0 0 20px rgba(0,0,0,0.5)',
//               }}
//             />
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Edit Drawer */}
//       <Drawer
//         anchor="right"
//         open={editDrawerOpen}
//         onClose={() => setEditDrawerOpen(false)}
//         slotProps={{
//           paper: {
//             sx: { width:'50%', px: 3, py: 3 },
//           },
//         }}
//       >
//         <Box component="form" noValidate autoComplete="off">
//           <Typography variant="h6" fontWeight="bold" color="#030A76" mb={3} textAlign={'center'}>
//             Edit Invoice
//           </Typography>
//           <Divider sx={{ borderColor: 'rgba(155, 151, 151, 0.58)', mb: 2 }} />

//           {/* Read-only Invoice File Name */}
//           <Typography variant="body2" color="textSecondary" mb={1}>
//             File Name
//           </Typography>
//           <Box
//             sx={{
//               bgcolor: '#f5f5f5',
//               p: 1.2,
//               borderRadius: 2,
//               mb: 2,
//               fontSize: 14,
//               fontWeight: 500,
//             }}
//           >
//             {selectedInvoice?.name}
//           </Box>

//           {/* Date Field */}
//           <Typography variant="body2" color="textSecondary" mb={0.5}>
//             Invoice Date
//           </Typography>
//           <input
//             type="date"
//             value={selectedInvoice?.date || ''}
//             onChange={(e) =>
//               setSelectedInvoice({ ...selectedInvoice, date: e.target.value })
//             }
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '8px',
//               border: '1px solid #ccc',
//               marginBottom: '20px',
//             }}
//           />

//           {/* Amount Field */}
//           <Typography variant="body2" color="textSecondary" mb={0.5}>
//             Amount (₹)
//           </Typography>
//           <input
//             type="number"
//             value={selectedInvoice?.amount || ''}
//             onChange={(e) =>
//               setSelectedInvoice({ ...selectedInvoice, amount: e.target.value })
//             }
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '8px',
//               border: '1px solid #ccc',
//               marginBottom: '20px',
//             }}
//           />

//           {/* Description Field */}
//           <Typography variant="body2" color="textSecondary" mb={0.5}>
//             Description
//           </Typography>
//           <textarea
//             rows={3}
//             value={selectedInvoice?.description || ''}
//             onChange={(e) =>
//               setSelectedInvoice({ ...selectedInvoice, description: e.target.value })
//             }
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '8px',
//               border: '1px solid #ccc',
//               resize: 'none',
//               marginBottom: '24px',
//             }}
//           />

//           {/* Action Buttons */}
//           <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button
//               variant="contained"
//               onClick={handleSave}
//               sx={{
//                 bgcolor: '#041062',
//                 color: '#fff',
//                 px: 3,
//                 py: 1,
//                 borderRadius: 2,
//                 fontWeight: 600,
//                 textTransform: 'none',
//                 fontSize: '0.95rem',
//                 boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
//                 '&:hover': {
//                   bgcolor: '#02124d',
//                 },
//               }}
//             >
//               Save Changes
//             </Button>

//             <Button
//               variant="outlined"
//               color="error"
//               onClick={() => setEditDrawerOpen(false)}
//               sx={{ borderRadius: 2, textTransform: 'none' }}
//             >
//               Cancel
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// }

// export default InvoiceGrid;




import { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Box,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import InvoiceDrawer from './drawer'; // make sure this path is correct



const initialInvoices = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Invoice_2024_${String(i + 1).padStart(2, '0')}.png`,
  image: `${process.env.PUBLIC_URL}/image.png`,
  date: '2024-06-20',
  amount: 236.26,
  description: 'Rs Two Hundred and Thirty Six Rupees Twenty Six Paise only',
}));

function InvoiceGrid() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleView = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice); // set directly, no destructure
    setEditDrawerOpen(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  const handleSave = (updatedInvoice) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === updatedInvoice.id ? updatedInvoice : inv
      )
    );
    setEditDrawerOpen(false);
  };

  return (
    <Box sx={{ px: 2, py: 2, display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          maxWidth: '1600px',
          justifyContent: 'flex-start',
        }}
      >
        {invoices.map((invoice) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={invoice.id}>
            <Card
              elevation={6}
              sx={{
                borderRadius: 4,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#030A76', mb: 1 }}>
                  {invoice.name}
                </Typography>
                <Box
                  sx={{
                    overflow: 'hidden',
                    borderRadius: 2,
                    '& img': {
                      transition: 'transform 0.4s ease',
                    },
                    '&:hover img': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={invoice.image}
                    alt="Invoice"
                    height="160"
                    sx={{ borderRadius: 2, objectFit: 'cover', width: '100%' }}
                  />
                </Box>
              </CardContent>

              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<VisibilityIcon />}
                  onClick={() => handleView(invoice.image)}
                  sx={{
                    bgcolor: '#030A76',
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: '#02124d',
                    },
                  }}
                >
                  View
                </Button>

                <Button
                  size="small"
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => handleEdit(invoice)}
                  sx={{
                    bgcolor: '#28a745',
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: '#218838',
                    },
                  }}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Fullscreen View Modal */}
      <Dialog
        fullScreen
        open={openModal}
        onClose={handleClose}
        slotProps={{
          backdrop: { sx: { backgroundColor: 'rgba(0,0,0,0.6)' } },
          paper: {
            sx: {
              background: 'transparent',
              boxShadow: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#fff',
            zIndex: 9999,
            backgroundColor: 'rgba(206, 10, 10, 0.96)',
            '&:hover': {
              color: 'black',
              background: 'rgba(206, 10, 10, 0.96)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          sx={{
            p: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Invoice Full View"
              sx={{
                maxHeight: '90vh',
                maxWidth: '90vw',
                objectFit: 'contain',
                borderRadius: 2,
                boxShadow: '0 0 20px rgba(0,0,0,0.5)',
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Linked Drawer Component */}
      {selectedInvoice && (
        <InvoiceDrawer
          open={editDrawerOpen}
          onClose={() => setEditDrawerOpen(false)}
          invoice={selectedInvoice}
          onSave={handleSave}
        />
      )}
    </Box>
  );
}

export default InvoiceGrid;
