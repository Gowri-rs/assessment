import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import axios from 'axios'

const Dashboard = () =>{
    const navigate = useNavigate();
    const [feedback,setFeedback] = useState([])

    const fetchdata = async() =>{
       const res= await axios.get('http://localhost:4000/feedback/')
       setFeedback(res.data)
    }

    useEffect = () => ({
    
    },[])

        const handledelete = async(id) =>{
            await axios.delete(`http://localhost:4000/feedback/${id}`);
            fetchdata();
        }

    return(
        <>
        {feedback.filter(Boolean).map((item)=> {
        <Card key= {id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item._id}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.courseName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.Comments}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.Rating}
          </Typography>
        </CardContent>
      </CardActionArea>
            <Button variant="contained" onClick={()=> navigate(`/edit/${id}`)}>EDIT</Button>
            <Button variant="contained" onClick={()=>{handledelete(item._id)}}>SUBMIT</Button>
    </Card>
    })}
    </>
    )
}

export default Dashboard