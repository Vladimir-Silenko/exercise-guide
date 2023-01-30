import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Details from '../components/Details'
import Videos from '../components/Videos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [similarTargetMuscle, setSimilarTargetMuscle] = useState([])
    const [similarEquipment, setSimilarEquipment] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const ExerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(ExerciseDetailData)

            const YouTubeSearchResult = await fetchData(`${youTubeSearchUrl}/search?query=${ExerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(YouTubeSearchResult)

            const ExerciseTargetData = await fetchData(`${exerciseDbUrl}/exercises/target/${ExerciseDetailData.target}`, exerciseOptions)
            setSimilarTargetMuscle(ExerciseTargetData)

            const ExerciseEquipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${ExerciseDetailData.equipment}`, exerciseOptions)
            setSimilarEquipment(ExerciseEquipmentData)
        }
        fetchExerciseData()
    }, [id])

    return (
        <Box>
            <Details exerciseDetail={exerciseDetail} />
            <Videos name={exerciseDetail.name} exerciseVideos={exerciseVideos} />
            <SimilarExercises targetData={similarTargetMuscle} equipmentData={similarEquipment} />
        </Box>
    )
}

export default ExerciseDetail