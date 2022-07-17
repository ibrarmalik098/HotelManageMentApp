import { Alert, Box } from '@mui/material'
import React, { useState } from 'react'
import ComponentButton from '../config/components/button'
import ComponentInput from '../config/components/input'
import '../App.css'
import { sendData, signUpUser } from '../config/firebase/firebasemethods'
import { Link, useNavigate } from 'react-router-dom'

const SignUpUser = () => {

  const [userobj, setUserObj] = useState([])
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();

  let signUp = () => {
    if (!userobj.email) {
      return alert("email is required")
    }
    if (!userobj.password || userobj.password.length < 6) {
      return alert("password is required and password must be aleast seven character")
    }
    setLoader(true)
    console.log(userobj)
    signUpUser(userobj).then(
      (res) => {
        console.log(res)
        setLoader(false)
        sendData(userobj, 'user', res.user.uid).then(() => {
          alert('User Successfully Created')
          navigate('/login')
        }).catch((err) => {
          console.log(err)
        })
      }
    ).catch(err => {
      setLoader(false)
      console.log(err)

    })

  }
  const Navigate = useNavigate()
  const Signuptologin = () => {
    Navigate('/login')
  }

  return (
    <>

      <Box className='MAin'>
        <Box className='shawdow'>
          <h1>Sign Up</h1>


          <Box sx={{ padding: 1 }}>
            <ComponentInput onChange={(e) => setUserObj({ ...userobj, name: e.target.value })} fullWidth={true} label='Name' type='text' />
          </Box>
          <Box sx={{ padding: 1 }}>
            <ComponentInput onChange={(e) => setUserObj({ ...userobj, email: e.target.value })} fullWidth={true} label='Email' type='email' required />
          </Box>
          <Box sx={{ padding: 1 }}>
            <ComponentInput onChange={(e) => setUserObj({ ...userobj, password: e.target.value })} fullWidth={true} label='Password' type='password' required />
            <a onClick={Signuptologin} href="">have a Account?</a>
          </Box>

          <Box sx={{ padding: 1 }}>
            <ComponentButton loading={loader} onClick={signUp} fullWidth={true} label='Sign Up' />
          </Box>
        </Box>

      </Box>





    </>


  )
}

export default SignUpUser