import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {

    return (
        <Stack
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1801, left: 100, behavior: 'smooth' })
            }}
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            spacing={5}
            sx={
                {
                    borderTop: bodyPart === item ? 'solid 4px #FF2625' : '',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '21px',
                    width: '200px',
                    height: '280px',
                    cursor: 'pointer',
                    paddingTop: '14px'
                }


            }
        >
            <img src={Icon} alt="dumbell" style={{ width: '40px', height: '40px' }} />
            <Typography
                fontSize="24px" fontWeight="bold" textTransform="capitalize"
            >{item}</Typography>
        </Stack >
    )
}

export default BodyPart