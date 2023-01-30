import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Videos = ({ exerciseVideos, name }) => {
    const { contents } = exerciseVideos
    return (
        <div>
            <Typography mt="30px" mb="30px" textAlign="center" variant='h4'>
                Watch <span style={{ color: "#ff2625", textTranform: 'capitalize' }}>{name}</span><br />
                Exercise Videos
            </Typography>
            <Stack justifyContent="space-between" flexWrap="wrap" alignItems="center"
                sx={{ flexDirection: { lg: 'row' } }}
            >
                {contents && contents.slice(0, 3).map((item, index) => {
                    return (
                        <Stack key={index} direction="column">
                            <a
                                key={index}
                                className="exercise-video"
                                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                                target='_blank'
                                rel='nonreferrer'
                                cursor="pointer"
                            >
                                <img src={`${item.video.thumbnails[0].url}`} alt={`${item.video.title}`} />
                                <Box mt="10px"><Typography color="grey" textAlign="center" variant='h6'>{item.video.title}</Typography></Box>
                            </a>
                        </Stack>
                    )
                })}
            </Stack>
        </div>
    )
}

export default Videos