import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import HotelCard from '../../config/components/cards';
import { sendData, signUpUser } from '../../config/firebase/firebasemethods';


const AdminHotelList = () => {

    //======================= Firebase Auth And Data Base ============================
    const [userobj, setUserObj] = useState([])
    const navigate = useNavigate();

    let Submit = () => {

        console.log(userobj)
                sendData(userobj, 'Admin').then(()=>{
                    alert("Hotel Booked ")
                    navigate('/')
                }).catch((err)=>{
                    console.log(err)
                })
        

    }
    //======================= Firebase Auth And Data Base ============================


    const [geoheadlines, setGeoHeadlines] = useState('');
    const location = useLocation();

    useEffect(() => {

        console.log(location.state)
        setGeoHeadlines(location.state);

    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Box sx={{ marginLeft: 2,marginTop:6 }} >
                            <HotelCard
                                image={geoheadlines.image}
                                textt={geoheadlines.heading}
                                Condition={geoheadlines.condition}
                                Person={geoheadlines.person}
                                Area={geoheadlines.area}
                                // booking={geoheadlines.bookings}
                                // addTOcart={geoheadlines.addTOcarts}
                                hotelNumber={geoheadlines.hotelnumber}
                                Price={geoheadlines.Price}

                            />
                        </Box>
                    </div>
                    <div className='col-md-6'>
                        <Typography className='booking_form' variant='p'>Booking Form</Typography>
                        <Box sx={{ marginTop: 3 }}>
                            <TextField onChange={(e) => setUserObj({ ...userobj, name: e.target.value })} sx={{ fontSize: '500px' }} className='Form_Inp' type='text' label='Enter Your Name' />
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <TextField onChange={(e) => setUserObj({ ...userobj, Address: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Enter Your Address ' />
                        </Box>
                        <Box sx={{ marginTop: 3, }}>
                            <TextField onChange={(e) => setUserObj({ ...userobj, Cnic: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Enter Your CNIC Number' />
                        </Box>
                        <Box sx={{ marginTop: 3, }}>
                            <TextField onChange={(e) => setUserObj({ ...userobj, Contact: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Enter Your Contact Number ' />
                        </Box>
                        <Box sx={{ marginTop: 3, }}>
                            <TextField onChange={(e) => setUserObj({ ...userobj, Days: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Number Of Stay Days' />
                        </Box>
                        <Box sx={{ marginTop: 3, }}>
                            <TextField onChange={(e) => setUserObj({ ...userobj, Person: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Number Of Person  ' />
                        </Box>
                        <Box sx={{ marginTop: 3, }}>
                            <TextField onChange={(e) => setUserObj({ ...userobj,hotelNumber: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Hotel Number  ' />
                        </Box>
                        <Box sx={{ marginTop: 3, }}>
                            <button onClick={Submit} className='Form_Btn' type='submit' >Book Now</button>
                        </Box>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHotelList