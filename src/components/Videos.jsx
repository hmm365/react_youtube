import React from 'react'
import { VideoCard, Loader } from './index'

const Videos = ({ videos }) => {
    if (!videos?.length) return <Loader />

    return (
        <article className="videos__inner">
            {videos.map((video, idx) => (
                <VideoCard key={idx} video={video} />
            ))}
        </article>
    )
}

export default Videos
