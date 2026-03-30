import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditFeedback =() =>{

    
    const navigate = useNavigate();
    const [edit,setedit] =useState({
        courseName: "",
        Comments:"",
        Rating:""
    })

    const handleChange = (e) =>{
        setEdit({
            ...edit, [e.target.name]: e.target.value 
        })
    }

    const handleSubmit =async() =>{
        await axios.post("http://localhost:4000/feedback/add", edit)
        navigate("/dashboard")
    }
     return(
            <Box
                  component="form"
                  sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                  noValidate
                  autoComplete="off"
                  direction = 'flex'
                  flexDirection='column'
            
                >
                  <TextField id="outlined-basic" label="Course Name" variant="outlined" name='courseName' onChange={handleChange} />
                  <TextField id="outlined-basic" label="Comments" variant="outlined" name='Comments' onChange={handleChange}/>
                  <TextField id="outlined-basic" label="Rating" variant="outlined" name='Rating' onChange={handleChange} />
                <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
                    </Box>

        )
}

export default EditFeedback;