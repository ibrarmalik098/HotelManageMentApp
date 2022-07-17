import { Box, Typography } from '@mui/material'
import Aos from 'aos'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import { ScaleLoader } from 'react-spinners'
import SMButton from '../../../config/components/button'
import HotelCard from '../../../config/components/cards'
import { DeleteData, getData } from '../../../config/firebase/firebasemethods'

const Admindata = () => {
    const [renderr, setRenderr] = React.useState([])

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

    const getAllData = () => {
        getData('Admin').then((res) => {
            setRenderr(res)
            console.log(renderr)
        })
    }
   
    // ====================== delete data ==============================================

    const DeleteMethod = (uid) => {
        console.log(uid)
        DeleteData("Admin/", uid).then(() => {
            console.log('delete successfully')
            console.log(uid)
        }).catch((err) => {
            console.log(err)
        })
    };

    // ====================== delete data ==============================================
    // ====================== Edit data ==============================================
    const Navigate = useNavigate();

    const EditNavigate = (receve) => {

        Navigate('/adminform', { state: receve })
    }

    // ====================== Edit data ==============================================
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

    return (
        <>
            <Typography className='Card_View_Hotel' variant='p'>Admin Pannel</Typography>
            {loading ?
                <div className='centerloader'>

                    <ScaleLoader color={color} size={150} />
                </div>
                :
                <Slider {...settings}>
                    {renderr.map((e) => {
                        return (
                            <>

                                <Box className='white_area' sx={{ marginTop: 3 }}   >
                                    <HotelCard
                                        image={e.image}
                                        textt={e.heading}
                                        Condition={e.condition}
                                        Person={e.person}
                                        Area={e.area}
                                        hotelNumber={e.hotelnumber}
                                        Price={e.Price}
                                    />
                                    <button onClick={() => DeleteMethod(e.uid)} className='Abso' >Delete</button>
                                    <button onClick={() => EditNavigate(e)} className='Absol' >Edit</button>
                                </Box>

                            </>
                        )
                    })}
                </Slider>
            }
        </>
    )
}

export default Admindata