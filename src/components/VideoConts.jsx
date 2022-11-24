import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Loader, Videos } from './index'

const VideoConts = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
        // fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => console.log(data))
        fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=5`).then((data) => setVideos(data.items))
    }, [id])
    const viod = []
    if (!videoDetail?.snippet) return <Loader />
    if (videos) {
        videos.map((e, inx) => (inx < 5 ? viod.push(e) : null))
    }

    return (
        <section id="videoConts">
            <div className="container">
                <div className="videoLeft">
                    <div className="video__player">
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
                    </div>
                    <div className="video__info">
                        <p className="video__title">{videoDetail.snippet.title}</p>

                        <p className="video__desc">
                            <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                            <span>{videoDetail.snippet.publishedAt.slice(0, 10)}</span>
                        </p>
                    </div>
                </div>
                <div className="videoRight">
                    <Videos videos={viod} />
                </div>
            </div>
        </section>
    )
}

export default VideoConts
