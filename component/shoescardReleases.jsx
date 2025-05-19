import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ShoescardReleases = () => {
   const [shoes, setShoes] = useState([]);
   useEffect(() => {
    const fetchShoes = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://shoes-collections.p.rapidapi.com/shoes',
          headers: {
            'x-rapidapi-key': 'cb5cf7672amsh5804636f4f6b3fap174150jsn448939c13152',
            'x-rapidapi-host': 'shoes-collections.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        setShoes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShoes();
  }, []);
  return (
    <>
    {shoes.map((shoes, index) => (
  <Card sx={{ maxWidth: 345, mb: 2 }} key={index}>
    <CardMedia
      sx={{ height: 140 }}
      image={shoes.image}
      title={shoes.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {shoes.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {shoes.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
))}

    </>
    
  )
}

export default ShoescardReleases