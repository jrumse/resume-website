import { Card, CardContent, TextField, Button } from '@mui/material';
import { nameRequired, emailRequired, messageRequired, emptyAlert, emailSent } from '../../../models/enums/dialog.enum';
import React, { useState } from 'react';
import AlertDialog from '../../dialog/alert-dialog/alert-dialog';
import './contact-form.css'

function ContactForm() {
  // State
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [number, setNumberValue] = useState("");
  const [message, setMessageValue] = useState("");
  const [alert, setAlert] = useState(false)
  const [alertContent, setAlertContent] = useState(emptyAlert)

  // Form Functions
  const handleSubmit = () => {
    // Handle Validation
    let isValid = inputValidation();
    // Validation Handling
    if (!isValid) {
      return;
    }
    // TODO: Hit External API to send email.
    // TODO: Post Message Receipt to the Database

    // Send Confirmation Dialog
    setAlertContent(emailSent);
    setAlert(true);

    // Clear the form
    setNameValue("");
    setEmailValue("");
    setNumberValue("");
    setMessageValue("");
  }

  const inputValidation = () => {
    // Error Handling for Name
    if (name === "") {
      // Set Dialog Content and Exit
      setAlertContent(nameRequired)
      setAlert(true)

      return false;
    }
    // Error Handling for Email
    if (email === "") {
      // Throw Error
      setAlertContent(emailRequired)
      setAlert(true)

      return false;
    }
    // Error Handling for Message
    if (message === "") {
      // Throw Error
      setAlertContent(messageRequired)
      setAlert(true)

      return false;
    }
    // Valid
    return true;
  }

  const handleFormClose = () => {
    setAlert(false);
  }

  // Textfield Styling
  let style={ 
    textfield: {
    "& .MuiInputLabel-root": { color: 'white' }, 
    "& .MuiOutlinedInput-root": {"& > fieldset": { borderColor: 'rgba(255, 255, 255, .2)' }}, 
    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: 'white' }},
    "& .MuiInputBase-root": {"& > input:-webkit-autofill": {backgroundColor: 'blue'}},
    input: { color: 'white' }
    },
    mlineinput: {
      style: { color: "white" },
    }
  }

  return (
    <div className="contactFormContent">
      <h1 className="contactHeader">Contact</h1>
      <Card elevation={0} className="contactFormCard">
        <CardContent>
          {/* Contact Form Works! */}
          <div>
            <TextField className="cFormInput" label="Name" variant="outlined"
              sx={style.textfield} onChange={(e) => {setNameValue(e.target.value)}} />
            <TextField className="cFormInput" label="Email" variant="outlined" 
              sx={style.textfield} onChange={(e) => {setEmailValue(e.target.value)}} />
            <TextField className="cFormInput" label="Phone Number (Optional)" variant="outlined" 
              sx={style.textfield} onChange={(e) => {setNumberValue(e.target.value)}} />
            <TextField className="cFormInput" label="Message" variant="outlined" multiline maxRows={8} minRows={8}
              sx={style.textfield} inputProps={style.mlineinput} onChange={(e) => {setMessageValue(e.target.value)}} />
          </div>
          <div>
            <Button className="sendBtn" variant="outlined" onClick={handleSubmit}
              sx={{ p: 1, borderColor: 'rgba(255, 255, 255, .2)' }}>Send Email</Button>
          </div>
        </CardContent>
      </Card>
      <AlertDialog open={alert} handleClose={handleFormClose} content={alertContent} ></AlertDialog>
    </div>
  );
}

export default ContactForm;