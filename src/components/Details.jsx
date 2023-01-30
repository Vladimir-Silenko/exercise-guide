import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

import equipmentIcon from '../assets/icons/equipment.png'
import bodyPartIcon from '../assets/icons/body-part.png'
import targetIcon from '../assets/icons/target.png'
import { btnStyle } from './ExerciseCard'


const Details = ({ exerciseDetail }) => {

    let { gifUrl, bodyPart, name, target, equipment } = exerciseDetail


    const UpperFirstLetter = (string) => {
        if (string) {
            string = string.split(' ')
            string = string.map(item => item.charAt(0).toUpperCase() + item.slice(1))
            string = string.join(' ')
        }
        return string
    }

    const extraDetails = [
        { name: bodyPart, icon: bodyPartIcon },
        { name: target, icon: targetIcon },
        { name: equipment, icon: equipmentIcon },
    ]
    return (
        <Stack spacing={2} sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: "center" }}>
            <img src={gifUrl} alt={name} className="detail-image" />
            <Stack ml='20px' spacing={5}>
                <Typography mb="30px" variant='h3'>{UpperFirstLetter(name)}</Typography>
                <Typography variant='h5'>
                    Exercises keep you strong. {name}<br />
                    is one of the best exerises to target {target}.<br />
                    it will improve your mood and gain energy
                </Typography>
                <Stack >
                    {extraDetails.map(item => {
                        return <Stack direction={'row'} alignItems="center">
                            <Button sx={{
                                margin: '10px 40px 10px 0',
                                width: "100px",
                                height: "100px",
                                bgcolor: "yellow",
                                borderRadius: "50%",
                            }}

                            ><img key={item.id} style={{ width: '50px', height: '50px' }} src={item.icon}></img></Button>

                            <Typography textTransform="capitalize" color="grey" variant='h4'>{item.name}</Typography>
                        </Stack>
                    })}
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Details