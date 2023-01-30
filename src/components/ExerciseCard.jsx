import { Stack, Typography, Link, Button } from '@mui/material'
import React from 'react'

export const btnStyle = (bgColor) => {
    return (
        {
            margin: '15px 15px 15px 21px',
            padding: '10px',
            borderRadius: '20px',
            fontSize: '14px',
            color: '#fff',
            backgroundColor: bgColor,
            textTransform: 'capitalize',

        }
    )
}

const ExerciseCard = ({ item }) => {



    return (
        <Link
            m="40px"
            style={{ textDecoration: 'none' }}
            className='exercise-card'
            href={`/exercise/${item.id}`}>

            <img src={item.gifUrl} alt={item.name} loading="lazy" />
            <Stack direction={'row'}>
                <Button style={btnStyle('#ffa9a9')}>
                    {item.target}
                </Button>
                <Button style={btnStyle('#fff176')}>
                    {item.bodyPart}
                </Button>
            </Stack>
            <Typography
                fontWeight="bold"
                color="#000"
                textAlign="center"
                textTransform="capitalize"
                pb="10px"
                mt="11px"
                fontSize="24px"
            >
                {item.name}
            </Typography>
        </Link >
    )
}

export default ExerciseCard