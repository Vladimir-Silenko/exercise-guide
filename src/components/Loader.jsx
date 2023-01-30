import { Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
    return (
        <Stack width="100%" direction="row" alignItems="center" justifyContent="center">
            <InfinitySpin color='grey' />
        </Stack>
    )
}

export default Loader