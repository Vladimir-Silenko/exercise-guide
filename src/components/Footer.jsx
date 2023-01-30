import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#FFF3F4">
            <Stack alignItems="center" pt="24px" px="40px" spacing={5}>
                <img src={Logo} alt="logo" style={{ marginBottom: "10px", width: "200px", height: "40px" }} />
                <Typography variant='h5' mt="40px" pb="40px">
                    Made by Vladimir Silenko
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer