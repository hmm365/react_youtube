import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Loader } from './index'

const VideoConts = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
        fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => console.log(data))
        fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
    }, [id])
    // const {
    //     snippet: { title, channelid, channelTitle },
    //     statistics: { viewCount, likeCount },
    // } = videoDetail
    if (!videos?.length) return <Loader />
    return (
        <section className="videoConts">
            <div className="container">
                <div className="videoRight">
                    <div className="video__player">
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
                    </div>
                    <div className="video__title">
                        <p>
                            {videoDetail.snippet.title}
                            <span>{videoDetail.snippet.publishedAt.slice(0, 10)}</span>
                        </p>
                        <p>{videoDetail.snippet.channelTitle}</p>
                    </div>
                </div>
                <div className="videoLeft"></div>
            </div>
        </section>
    )
}

export default VideoConts
