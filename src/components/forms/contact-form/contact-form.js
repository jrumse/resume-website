import { Card, CardContent, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import './contact-form.css'

function ContactForm() {
  // State
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [number, setNumberValue] = useState("");
  const [message, setMessageValue] = useState("");

  // Form Functions
  const handleSubmit = () => {
    console.log("Name: ", name)
    console.log("Email: ", email)
    console.log("Number: ", number)
    console.log("Message: ", message)
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
            <TextField className="cFormInput" label="Phone Number" variant="outlined" 
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
    </div>
  );
}

export default ContactForm;