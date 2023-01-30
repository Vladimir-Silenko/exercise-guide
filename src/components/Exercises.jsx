import React from 'react'
import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({ exercises, setExercises, bodyPart }) => {



    const [CurrentPage, setCurrentPage] = useState(1)
    const exercisePerPage = 9
    const indexOfLastExercise = CurrentPage * exercisePerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage
    const CurrentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)



    const Paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: "1800px", behavior: 'smooth' })
    }

    useEffect(() => {
        const searchByBodyPart = async () => {
            let exerciseData = []
            if (bodyPart === 'all') {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            }
            else {
                exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }
            setExercises(exerciseData)
        }
        searchByBodyPart()

    }, [bodyPart])

    return (
        <Box
            id="exercises"
            sx={{ mt: { lg: '110px' } }}
            mt="50px"
            p="20px"
        >
            <Typography fontWeight="bold" fontSize="32px" type="h3" textAlign="center" mb="46px">
                Showing Results
            </Typography>
            <Stack
                direction="row"
                rowGap={{ lg: 16, xs: 5 }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {CurrentExercises.map((item, index) => {

                    return <ExerciseCard item={item} key={index} />
                })}

            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="primary"
                        count={Math.ceil(exercises.length / exercisePerPage)}
                        defaultPage={1}
                        page={CurrentPage}
                        onChange={Paginate}
                    />
                )
                }
            </Stack>
        </Box>
    )
}

export default Exercises