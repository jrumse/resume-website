import React from 'react';
import { Dialog, DialogContent, CircularProgress } from '@mui/material';
import './loading-dialog.css';

function LoadingDialog(props) {
  // Style
  const dialogStyle = {
    style: {
      backgroundColor: "#040c21",
      color: 'white',
    },
  }

  return (
    <Dialog PaperProps={dialogStyle} open={props.open}>
      <DialogContent >
        <CircularProgress />
      </DialogContent>
    </Dialog>
  );
}

export default LoadingDialog;