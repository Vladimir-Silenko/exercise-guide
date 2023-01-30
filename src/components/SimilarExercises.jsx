
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';
const SimilarExercises = ({ targetData, equipmentData }) => {

    const ReturnScrollBar = (option) => {
        return option.length ? <HorizontalScrollBar data={option} /> : <Loader />
    }

    return (
        <Box mb='40px'>

            <Typography textAlign="center" variant='h3'>Exercises that target the same muscle group</Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {ReturnScrollBar(targetData)}
            </Stack>

            <Typography textAlign="center" variant='h3'>More exercises with the same Equipment</Typography>
            <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
                {ReturnScrollBar(equipmentData)}
            </Stack>

        </Box>
    )
}

export default SimilarExercises