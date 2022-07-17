import React from 'react'
import Render_Card from './Render_Card'
import NAvbarHotel from './NAvbar'
import Head_Section from './Head_Section'
import { Box } from '@mui/system'
import CarouselFadeExample from './extra'
import Hotel_nature from './hotel_nature'
import Offers from './offers_Hotel'
import FoodHotel from './Food_hotel'
import ContactHotel from './ContactHotel'
import FooterHotel from './FooterHotel'

const Mainpage = () => {
    return (
        <>
        <Box className='bodyall'>

            <Box>
                <NAvbarHotel />
            </Box>
            <br/>
            <br/><br/><br/><br/>
            <Box>
                <Head_Section />
            </Box>
            <Box>
                <Render_Card />
            </Box>
            <Box>
                <Hotel_nature />
            </Box>
            <Box>
                <Offers />
            </Box>
            <Box>
                <FoodHotel />
            </Box>
            <Box>
                <ContactHotel />
            </Box>
            <Box>
                <FooterHotel />
            </Box>
            
        </Box>
        </>
    )
}

export default Mainpage