import { Box } from '@mui/material'
import React, { useState } from 'react'
import ComponentButton from '../config/components/button'
import ComponentInput from '../config/components/input'
import '../App.css'
import { logInUser } from '../config/firebase/firebasemethods'
import { useNavigate } from 'react-router-dom'

const LoginUser = () => {

    const [userobj, setUserObj] = useState([])
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()

    let login = () => {
        if (!userobj.email) {
            return alert("email is required")
        }
        if (!userobj.password === userobj.password  || userobj.password.length < 6) {
            return alert("password is required password must be atleast 6 characters")
        }
        console.log(userobj)
        setLoader(true)
        
        logInUser(userobj).then(() => {
            setLoader(false)
            alert('Login successfully')

            navigate('/')


        })

    }
    const Navigate = useNavigate()
    const Signuptologin=()=>{
      Navigate('/signup')
    }
    // navigate('singup')




    return (
        <>
            <Box className='MAin'>
                <Box className='shawdow'>
                    <h1>LOG IN</h1>


                    <Box sx={{ padding: 1 }}>
                        <ComponentInput onChange={(e) => setUserObj({ ...userobj, email: e.target.value })} fullWidth={true} label='Email' type='email' required />
                    </Box>
                    <Box sx={{ padding: 1 }}>
                        <ComponentInput onChange={(e) => setUserObj({ ...userobj, password: e.target.value })} fullWidth={true} label='Password' type='password' required />
                        <a onClick={Signuptologin} href="">Create Account</a>

                    </Box>

                    <Box sx={{ padding: 1 }}>
                        <ComponentButton loading={loader} onClick={login} fullWidth={true} label='log In' />
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default LoginUser