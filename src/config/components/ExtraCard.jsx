import { CardMedia, Typography } from '@mui/material'
import React from 'react'

const ExtraCard = (props) => {
    const { image, Upto, rooms, Conditions, View, booknow, People } = props
    return (
        <div class="single_offers">
            <div class="about_thumb">
                <CardMedia
                    // className='cardimage'
                    component="img"
                    // height='300px'
                    // width='10px'
                    image={image}
                />
            </div>
            <h3 className='Cardoffre'>{Upto} <br />
                {rooms}</h3>
            <ul>
                <Typography className='ulli' gutterBottom variant="p" >
                    {Conditions}
                </Typography>
                <Typography className='ulli' gutterBottom variant="p" >
                    {People}
                </Typography>
                <Typography className='ulli' gutterBottom variant="p" >
                    {View}
                </Typography>
            </ul>
            <a href="#" class="book_now ">{booknow}</a>
        </div>
    )
}

export default ExtraCard