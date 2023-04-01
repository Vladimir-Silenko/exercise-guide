import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises '


const Home = () => {

    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])



    return (
        <Box>
            <HeroBanner />
            <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
            <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
        </Box>
    )
}

export default Home