import React , { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import './alert-dialog.css';

function AlertDialog(props) {
  // State

  // Style
  const dialogStyle = {
    style: {
      backgroundColor: "#040c21",
      color: 'white',
    },
  }

  return (
    <Dialog PaperProps={dialogStyle} open={props.open} onClose={props.handleClose}
      aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {props.content.title}
      </DialogTitle>
      <DialogContent >
        <DialogContentText id="alert-dialog-description" className="alertDialogContentText">
          {props.content.statement}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={props.handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlertDialog;