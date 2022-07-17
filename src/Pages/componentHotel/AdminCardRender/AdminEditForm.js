import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Editfac } from '../../../config/firebase/firebasemethods'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminForm = () => {


    const Location = useLocation();
    console.log(Location.state)


    const [allRecive, setRecive] = useState({
        image: Location.state.image,
        heading: Location.state.heading,
        condition: Location.state.condition,
        area: Location.state.area,
        Price: Location.state.Price,
        hotelnumber: Location.state.hotelnumber,
        person: Location.state.person,
        uid: Location.state.uid,



    })


    const NewEdit = () => {
        Editfac(allRecive,'/Admin',allRecive.uid).then(() => {
            toast.success("Data Updated", {
                position: "top-center",
            });
            Navigate('/admincard')
        }).catch((err) => {
            console.log(err)
        })
    }





    return (

        <div class='Edit_form'>
            <div className='col-md-6  Edit_form'>
                <Typography className='booking_form' variant='p'>Booking Form</Typography>
                <Box sx={{ marginTop: 3 }}>
                    <TextField value={allRecive.image} onChange={(e) => setRecive({ ...allRecive, image: e.target.value })} sx={{ fontSize: '500px' }} className='Form_Inp' type='text' label='image' />
                </Box>
                <Box sx={{ marginTop: 3 }}>
                    <TextField value={allRecive.heading} onChange={(e) => setRecive({ ...allRecive, heading: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Heading ' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <TextField value={allRecive.condition} onChange={(e) => setRecive({ ...allRecive, condition: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Condition' />
                </Box>
                <Box sx={{ marginTop: 3, }}>

                    <TextField value={allRecive.area} onChange={(e) => setRecive({ ...allRecive, area: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Area' />
                </Box>
                <Box sx={{ marginTop: 3, }}>

                    <TextField value={allRecive.person} onChange={(e) => setRecive({ ...allRecive, person: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Person' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <TextField value={allRecive.Price} onChange={(e) => setRecive({ ...allRecive, Price: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Price  ' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <TextField value={allRecive.hotelnumber} onChange={(e) => setRecive({ ...allRecive, hotelnumber: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Hotel Number  ' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <button onClick={NewEdit} className='Form_Btn' type='submit' >Update Now</button>
                </Box>

            </div>
            <ToastContainer/>
        </div>
    )
}

export default AdminForm