import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/Logo.png"
const Navbar = () => {
    return (
        <Stack direction="row"
            justifyContent="space-around"
            sx={{
                spacing: { sm: 6, xs: 2 },
                mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none',
            }}
            px='20px'
        >
            <Link to="/">
                <img src={Logo} alt="HomePage Logo"
                    style={{
                        width: '48px', height: '48px', margin: '0',
                    }} />
            </Link>

            <Stack
                direction="row"
                spacing={2}
                fontSize="24px"
                alignItems="flex-end"
                ml="40px"
            >
                <Link to="/" style={{
                    textDecoration: 'none', color: '#3A1212',
                    borderBottom: '3px solid #FF2625',
                    marginRight: '20px'
                }}>
                    Home
                </Link>

                <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>
                    Exercises
                </a>

            </Stack>
        </Stack >
    )
}

export default Navbar