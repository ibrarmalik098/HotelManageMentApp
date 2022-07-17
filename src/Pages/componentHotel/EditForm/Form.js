import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Editfac } from '../../../config/firebase/firebasemethods'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {


    const Location = useLocation();
    console.log(Location.state)


    const [allRecive, setRecive] = useState({
        name: Location.state.name,
        Address: Location.state.Address,
        Cnic: Location.state.Cnic,
        Days: Location.state.Days,
        Person: Location.state.Person,
        hotelNumber: Location.state.hotelNumber,
        uid: Location.state.uid,



    })


    const NewEdit = () => {
        Editfac(allRecive, '/booking',allRecive.uid).then(() => {
             toast.success("Updated Successfully", {
                position: "top-center",
            });
            Navigate('/admin')
        }).catch((err) => {
            console.log(err)
        })
    }





    return (
        <>

        <div class='Edit_form'>
            <div className='col-md-6  Edit_form'>
                <Typography className='booking_form' variant='p'>Update Form</Typography>
                <Box sx={{ marginTop: 3 }}>
                    <TextField value={allRecive.name} onChange={(e) => setRecive({ ...allRecive, name: e.target.value })} sx={{ fontSize: '500px' }} className='Form_Inp' type='text' label='Enter Your Name' />
                </Box>
                <Box sx={{ marginTop: 3 }}>
                    <TextField value={allRecive.Address} onChange={(e) => setRecive({ ...allRecive, Address: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Enter Your Address ' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <TextField value={allRecive.Cnic} onChange={(e) => setRecive({ ...allRecive, Cnic: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Enter Your CNIC Number' />
                </Box>
                <Box sx={{ marginTop: 3, }}>

                    <TextField value={allRecive.Days} onChange={(e) => setRecive({ ...allRecive, Days: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Number Of Stay Days' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <TextField value={allRecive.Person} onChange={(e) => setRecive({ ...allRecive, Person: e.target.value })} sx={{ fontSize: '500px' }} type='text' label='Number Of Person  ' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <TextField value={allRecive.hotelNumber} onChange={(e) => setRecive({ ...allRecive, hotelNumber: e.target.value })} sx={{ fontSize: '500px' }} type='number' label='Hotel Number  ' />
                </Box>
                <Box sx={{ marginTop: 3, }}>
                    <button onClick={NewEdit} className='Form_Btn' type='submit' >Update Now</button>
                </Box>

            </div>
        </div>
        <ToastContainer />
        </>
    )
}

export default Form