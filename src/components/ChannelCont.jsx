import React, { useState, useEffect } from 'react'
// import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Videos, Loader } from './index'

const ChannelCont = () => {
    const [channelDetail, setChannelDetail] = useState()
    const [videos, setVideos] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchAPI(`channels?part=snippet&id=${id}`)
            setChannelDetail(data?.items[0])
            console.log(data?.items[0])
        }

        const videosData = async () => {
            const data = await fetchAPI(`search?part=snippet&channelId=${id}&order=date`)
            setVideos(data?.items)
            console.log(data?.items)
        }

        fetchResults()
        videosData()
    }, [id])

    if (!channelDetail) return <Loader />
    return (
        <section id="channelConts">
            <div className="channer__header" style={{ backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})` }}></div>
            <div className="channer__info">
                <img src={`${channelDetail?.snippet?.thumbnails?.default?.url}`} alt={channelDetail?.snippet?.title} />
                <div>
                    <h3>{channelDetail?.snippet?.title}</h3>
                    <span>구독자 수 : {channelDetail?.statistics?.subscriberCount} 명</span>
                    <span>총 비디오 갯수 : {channelDetail?.statistics?.videoCount} 개</span>
                    {/* <span>비디오 카운트 수 : {channelDetail?.statistics?.viewCount}</span> */}
                </div>
            </div>
            <div className="channer__videos">
                <Videos videos={videos} />
            </div>
        </section>
    )
}

export default ChannelCont
