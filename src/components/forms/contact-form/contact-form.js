import { Card, CardContent, TextField, Button } from '@mui/material';
import { nameRequired, emailRequired, messageRequired, emptyAlert, emailSent, emailError } from '../../../models/enums/dialog.enum';
import React, { useState, useRef } from 'react';
import AlertDialog from '../../dialog/alert-dialog/alert-dialog';
import LoadingDialog from '../../dialog/loading-dialog/loading-dialog';
import emailjs from '@emailjs/browser';
import './contact-form.css'
import { endpoints } from '../../../models/enums/endpoints.enum';
import ContactReceipt from '../../../models/interfaces/contact.class';

function ContactForm() {
  // State
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [number, setNumberValue] = useState("");
  const [message, setMessageValue] = useState("");
  const [alert, setAlert] = useState(false);
  const [load, setLoad] = useState(false);
  const [alertContent, setAlertContent] = useState(emptyAlert);


  // Form
  const contactForm = useRef();


  // Form Functions
  const handleSubmit = (e) => {
    // Prevent Default
    e.preventDefault();

    // Trigger Loading Spinner
    setLoad(true);

    // Handle Validation
    let isValid = inputValidation();

    // Validation Handling
    if (!isValid) {
      setLoad(false);
      return;
    }

    // Hit External API to send email.
    emailjs.sendForm('service_9zfis6f', 'template_sbzj5dt', contactForm.current, 'jvTbsz4QSwL50Nri7')
      .then(() => {
          // Unset Load Dialog
          setLoad(false);
      }, (error) => {
          // Unset Load Dialog
          setLoad(false);
          // Return Error Dialog
          let sendError = emailError;
          sendError.statement = emailError.statement + error.text;
          setAlertContent(sendError);
          setAlert(true);
      })
      .then(() => {
          // If Email Service was Successful, then post the message receipt
          postContactReceipt();
          // Set Successful Email Dialog
          setAlertContent(emailSent);
          setAlert(true);
      }, (error) => {
          // Unset Load Dialog
          setLoad(false);
          // Return Error Dialog
          let postError = emailError;
          postError.statement = emailError.statement + error.text;
          setAlertContent(postError);
          setAlert(true);
      }) 

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


  const postContactReceipt = () => {
    // Get Current Date in EST
    const date = new Date();
    var offset = -300; //Timezone offset for EST in minutes.
    var estDate = new Date(date.getTime() + offset*60*1000);

    // Create new ContactReceipt model
    let newContactReceipt = new ContactReceipt(name, email, number, name, estDate);

    // Post Message Receipt to the Database
    fetch(process.env.REACT_APP_SERVER + process.env.REACT_APP_ROOT + endpoints.contact, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(newContactReceipt.getContactReceipt())
    })
      .then(response => response.json())
      .then(data => console.log(data));
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
            <TextField className="cFormInput" label="Name" variant="outlined" name="user_name" value={name}
              sx={style.textfield} onChange={(e) => {setNameValue(e.target.value)}} />
            <TextField className="cFormInput" label="Email" variant="outlined" name="user_email" value={email}
              sx={style.textfield} onChange={(e) => {setEmailValue(e.target.value)}} />
            <TextField className="cFormInput" label="Phone Number (Optional)" variant="outlined" name="user_number" value={number}
              sx={style.textfield} onChange={(e) => {setNumberValue(e.target.value)}} />
            <TextField className="cFormInput" label="Message" variant="outlined" multiline maxRows={8} minRows={8} name="message" value={message}
              sx={style.textfield} inputProps={style.mlineinput} onChange={(e) => {setMessageValue(e.target.value)}} />
          </div>
          <div>
            <Button className="sendBtn" variant="outlined" onClick={handleSubmit}
              sx={{ p: 1, borderColor: 'rgba(255, 255, 255, .2)' }}>Send Email</Button>
          </div>
        </CardContent>
      </Card>
      <AlertDialog open={alert} handleClose={handleFormClose} content={alertContent} ></AlertDialog>
      <LoadingDialog open={load}></LoadingDialog>
    </form>
  );
}

export default ContactForm;