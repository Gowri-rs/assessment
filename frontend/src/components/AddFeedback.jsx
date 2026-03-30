import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const AddFeedback=() =>{
   return(
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      direction = 'flex'
      
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

    </Box>
   )
}

export default AddFeedback;