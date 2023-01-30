import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import { exerciseOptions, fetchData, } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('')
    let [bodyParts, setBodyParts] = useState([])

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            const searchedExercises = exerciseData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );
            setSearch('')
            setExercises(searchedExercises)
        }
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
    }


    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExerciseData()
    }, [])

    return (
        <Stack alignItems="center" justifyContent="center" mt="37px" pd="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb={'50px'}
                mt="30px"
                textAlign="center"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" direction="row" mb="72px">
                <TextField sx={{
                    input: {
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px'
                    },
                    width: { lg: '800px', xs: '350px' },
                    backgroundColor: '#fff',
                    borderRadius: "40px"
                }}
                    value={search}
                    type="text"
                    height="76px"
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder="Search Exercises"
                />
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor: "#FF2625",
                        color: '#FFF',
                        textTransform: 'none',
                        width: { lg: '170px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'

                    }}
                    onClick={() => handleSearch()}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px', }}>
                <HorizontalScrollBar setBodyPart={setBodyPart} bodyPart={bodyPart} data={bodyParts} isBodyParts={true} />
            </Box>
        </Stack>
    )
}

export default SearchExercises 