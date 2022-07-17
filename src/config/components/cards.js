import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../App.css'
import { Box } from '@mui/system';

export default function HotelCard(props) {
  const { image, textt, Condition, booking, VeiwMore, Person, Area,hotelNumber,Price } = props
  return (
    <Box  className='Card_Box_shadow'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {textt}
          </Typography>
          <Typography className='ul_li' gutterBottom variant="p" >
            {Condition}
          </Typography>
          <Typography className='ul_li' gutterBottom variant="p" >
            {Person}
          </Typography>
          <Typography className='ul_li' gutterBottom variant="p" >
            {Area}
          </Typography>
          <Typography className='ul_li' gutterBottom variant="p" >
            {hotelNumber}
          </Typography>
          <Typography className='ul_li' gutterBottom variant="p" >
            {Price}
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="small">{booking}</Button>
          <Button size="small">{VeiwMore}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
