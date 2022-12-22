import { Card, CardContent, TextField } from '@mui/material';
import React from 'react';
import './contact-form.css'

function ContactForm() {


  // Textfield Styling
  let style={ 
    textfield: {
    "& .MuiInputLabel-root": { color: 'white' }, 
    "& .MuiOutlinedInput-root": {"& > fieldset": { borderColor: 'rgba(255, 255, 255, .2)' }}, 
    "& .MuiOutlinedInput-root:hover": { "& > fieldset": { borderColor: 'white' }},
    input: { color: 'white' }
    },
    mlineinput: {
      style: { color: "white" }
    }
  }

  return (
    <div className="contactFormContent">
      <h1 class="contactHeader">Contact</h1>
      <Card elevation={0} className="contactFormCard">
        <CardContent>
          {/* Contact Form Works! */}
          <div>
            <TextField className="cFormInput" label="Name" variant="outlined" sx={style.textfield} />
          </div>
          <div>
            <TextField className="cFormInput" label="Email" variant="outlined" sx={style.textfield} />
            <TextField className="cFormInput" label="Phone Number" variant="outlined" sx={style.textfield} />
            <TextField className="cFormInput" label="Message" variant="outlined" multiline rows={8} maxRows={8} 
            sx={style.textfield} inputProps={style.mlineinput} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactForm;