import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { sendData, signUpUser } from '../../config/firebase/firebasemethods';
import SelectCategory from './SelectCatogery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AdminAdd = () => {
    const [userobj, setUserObj] = useState([])
    const navigate = useNavigate();

    let Submit = () => {

        console.log(userobj)
        sendData(userobj, 'Admin').then(() => {
            toast.success("Hotel Add Successfully", {
                position: "top-center",
            });
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })


    }
    return (
        <>
            <div class='alingcenter'>

                <Typography class='shadow'>

                    <Typography className='booking_form ' variant='p'>Add Card Form</Typography>
                    <Typography variant='p'><SelectCategory /></Typography>
                    <Box sx={{ marginTop: 3 }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, image: e.target.value })} sx={{ fontSize: '500px' }} className='Form_Inp' type='text' label='Enter Your Hotel image URl' />
                    </Box>
                    <Box sx={{ marginTop: 3 }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, heading: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Enter Your Hotel Heading ' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, condition: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Enter Your Hotel condition' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, person: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Enter Your Total person ' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, area: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Enter Your Hotel Area' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, Price: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Enter Your Hotel Price ' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, hotelnumber: e.target.value })} sx={{ fontSize: '500px' }} type='text' label=' Enter Your Hotel Number  ' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, bookings: e.target.value })} sx={{ fontSize: '500px' }} type='text' label=' Book Now ' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <TextField onChange={(e) => setUserObj({ ...userobj, VeiwMores: e.target.value })} sx={{ fontSize: '500px' }} type='text' label=' View More  ' />
                    </Box>
                    <Box sx={{ marginTop: 3, }}>
                        <button onClick={Submit} className='Form_Btn' type='submit' >Add card</button>
                    </Box>
                </Typography>

            </div>
            <ToastContainer />

        </>
    )
}

export default AdminAdd