import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const DashBoard = () => {

    const navigate= useNavigate();
    const [feedback, setFeedback] = useState([])

    const fetchData = async() => {
      try {
        const res = await axios.get(`http://localhost:4000/feedback`, feedback)
        setFeedback(res.data)
      } catch (error) {
        console.log(error)
      }

    }

    useEffect(() => {
      fetchData();
    },[])

    const deleteFeedback = async(id) =>{
         await axios.delete(`http://localhost:4000/feedback/${id}`)
         fetchData();
    }


  return (
    <div>
    {feedback.filter(Boolean).map((item) => (
    <Card key={item._id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.courseName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item._id}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.Duration}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.Rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained"  onClick={() => {deleteFeedback(item._id)}}>delete</Button>
      <Button variant="contained"  onClick={() => {navigate(`/edit/${item._id}`)}}>Edit</Button>

    </Card>
    ))}
    </div>
  )
}

export default DashBoard