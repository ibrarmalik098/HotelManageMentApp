import { Box, Typography } from '@mui/material'
import React from 'react'

const Head_Section = () => {
    return (
        <>
            <Box className='Head_Heading'>
                <Typography className='head_section' variant='h1'>
                    <span className='Head_Arcoda' > ARCADA</span>
                </Typography>
                <Typography className='head_section' variant='h1' >
                    <span className='Head_Arcoda'>HOTEL</span>
                </Typography>
                <Typography className='head_section3' variant='h1'>
                    A Luxuries Hotel with Nature
                </Typography>
            </Box>
        </>
    )
}

export default Head_Section