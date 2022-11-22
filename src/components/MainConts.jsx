import React, { useEffect, useState } from 'react'

import { fetchAPI } from '../utils/fetchAPI'
import { CateGory, Videos } from './index'

const MainConts = () => {
    const [selectCategory, setSelectCategory] = useState('윤하')
    const [videos, setVideos] = useState(null)
    useEffect(() => {
        fetchAPI(`search?&part=snippet&q=${selectCategory}&type=video`).then((data) => setVideos(data.items))
    }, [selectCategory])

    return (
        <main id="main">
            <aside id="aside">
                <CateGory selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
            </aside>
            <section id="contents">
                <h2>
                    <em>{selectCategory}</em> 채널
                </h2>
                <Videos videos={videos} />
            </section>
        </main>
    )
}

export default MainConts
