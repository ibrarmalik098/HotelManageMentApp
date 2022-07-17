import React, { useEffect,  } from 'react'
import SMButton from '../config/components/button'
import { getData } from '../config/firebase/firebasemethods'
import {  useNavigate } from 'react-router-dom'


function Home() {

const navigate =   useNavigate()
const Logout = ()=>{
navigate('/')
alert('Log Out Seccessfully')
}



  useEffect(() => {
      getData(`user`)


  }, [])



  return (
    <>
    
      <h1>Ao raja</h1>
      <SMButton onClick={Logout} label='Log Out'/>


      
    </>
  )
}

export default Home