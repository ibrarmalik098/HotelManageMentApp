import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Aos from 'aos'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import HotelCard from '../../config/components/cards'
import { getData } from '../../config/firebase/firebasemethods'
import { Cardobj } from '../../Pages/componentHotel/Cardsobj'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScaleLoader } from 'react-spinners'
const Render = () => {

  // const [cardData, setCarddata] = useState(Cardobj)


  const navigate = useNavigate();
  const newsButton = (items) => {
    navigate('/formhotel', {
      state: items,
    })
    console.log(items)


  }
  const settings = {

    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, [])

  // get data =========
  const [renderr, setRenderr] = React.useState([])


  const getAllData = () => {
    getData('Admin').then((res) => {
      setRenderr(res)
      console.log(renderr)
    })
  }
  
  const [loading, setLoading] = React.useState(false)
  const [color, setColor] = React.useState("#F6E833");

  useEffect(() => {
    getAllData()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    Aos.init({ duration: 2000 });

  }, [])



  // get data =========


  return (

    <div className='OverFlow'>
      <Typography className='Card_View_Hotel' variant='p'>Sea View Side Hotels</Typography>
      {loading ?
        <div className='centerloader'>

          <ScaleLoader color={color} size={150} />
        </div>
        :
        <Box className='OverCard'>
          <Slider {...settings}>


              {renderr.map((e) => {
                return (
                  <>
                    <Box className='white_area' sx={{ marginTop: 3 }} onClick={() => newsButton(e)}  >
                      <HotelCard
                        image={e.image}
                        textt={e.heading}
                        Condition={e.condition}
                        Person={e.person}
                        Area={e.area}
                        booking={e.bookings}
                        VeiwMore={e.VeiwMores}
                        hotelNumber={e.hotelnumber}
                        Price={e.Price}

                      />
                    </Box>
                  </>
                )
              })}

          </Slider>
        </Box>
      }

    </div>
  )
}

export default Render
{/* {cardData.map((e) => {
  return (
    <>

      <Box className='white_area' sx={{ marginTop: 3 }} onClick={() => newsButton(e)}  >
        <HotelCard
          image={e.image}
          textt={e.heading}
          Condition={e.condition}
          Person={e.person}
          Area={e.area}
          booking={e.bookings}
          VeiwMore={e.VeiwMores}
          hotelNumber={e.hotelnumber}
          Price={e.Price}

        />
      </Box>
    </>

  )
})} */}