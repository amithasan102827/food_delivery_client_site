import { Alert, Box, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => { const [email,setEmail]=useState('');
const [success,setSuccess]=useState(false);


const handleOnBlur=e=>{
    const value=e.target.value;
    setEmail(value);
}

const handleSubmit=e=>{

    const user={email};
    e.preventDefault();
    fetch('http://localhost:5000/users/admin',{
        method:'PUT',
        headers:{
            
            'content-type':'application/json'
         
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            setSuccess(true)
            setEmail('');
            console.log(data);
        }
        
    })
}


     



    return (
        <div style={{marginTop:'150px'}}>
        <Container  >
        <h2>Make Admin</h2>
        <Box>
        <form onSubmit={handleSubmit}>
        <TextField onBlur={handleOnBlur} style={{width:'40%'}} id="standard-basic" label="Email" variant="standard" />
        <Button type="submit" variant="contained">Make Admin</Button>
        </form>
        {
            success && <Alert style={{marginTop:'30px'}} severity="success">successfully make admin!</Alert>
        }
        </Box>
    </Container>
    </div>
    );
};

export default MakeAdmin;