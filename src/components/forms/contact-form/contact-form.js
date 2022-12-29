import { Card, CardContent, TextField, Button } from '@mui/material';
import { nameRequired, emailRequired, messageRequired, emptyAlert, emailSent } from '../../../models/enums/dialog.enum';
import React, { useState, useRef } from 'react';
import AlertDialog from '../../dialog/alert-dialog/alert-dialog';
import emailjs from '@emailjs/browser';
import './contact-form.css'

function ContactForm() {
  // State
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [number, setNumberValue] = useState("");
  const [message, setMessageValue] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState(emptyAlert);

  // Form
  const contactForm = useRef();

  // Form Functions
  const handleSubmit = (e) => {
    // Prevent Default
    e.preventDefault();

    // Handle Validation
    let isValid = inputValidation();
    // Validation Handling
    if (!isValid) {
      return;
    }

    // Hit External API to send email.
    // Uncomment Lines 34 through 41 to enable.
    // emailjs.sendForm('service_9zfis6f', 'template_sbzj5dt', contactForm.current, 'jvTbsz4QSwL50Nri7')
    //   .then(() => {
    //       setAlertContent(emailSent);
    //       setAlert(true);
    //   }, (error) => {
    //       // TODO: Return Error Dialog
    //       console.log(error.text);
    //   });
    // TODO: Post Message Receipt to the Database

    // Send Confirmation Dialog
    setAlertContent(emailSent);
    setAlert(true);

    // TODO: Find a way to clear the form
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
    <form ref={contactForm} className="contactFormContent">
      <h1 className="contactHeader">Contact</h1>
      <Card elevation={0} className="contactFormCard">
        <CardContent>
          <div>
            <TextField className="cFormInput" label="Name" variant="outlined" name="user_name"
              sx={style.textfield} onChange={(e) => {setNameValue(e.target.value)}} />
            <TextField className="cFormInput" label="Email" variant="outlined" name="user_email"
              sx={style.textfield} onChange={(e) => {setEmailValue(e.target.value)}} />
            <TextField className="cFormInput" label="Phone Number (Optional)" variant="outlined" name="user_number"
              sx={style.textfield} onChange={(e) => {setNumberValue(e.target.value)}} />
            <TextField className="cFormInput" label="Message" variant="outlined" multiline maxRows={8} minRows={8} name="message"
              sx={style.textfield} inputProps={style.mlineinput} onChange={(e) => {setMessageValue(e.target.value)}} />
          </div>
          <div>
            <Button className="sendBtn" variant="outlined" onClick={handleSubmit}
              sx={{ p: 1, borderColor: 'rgba(255, 255, 255, .2)' }}>Send Email</Button>
          </div>
        </CardContent>
      </Card>
      <AlertDialog open={alert} handleClose={handleFormClose} content={alertContent} ></AlertDialog>
    </form>
  );
}

export default ContactForm;