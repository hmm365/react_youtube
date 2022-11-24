import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchAPI } from '../utils/fetchAPI'
import { Videos, CateGory, Loader } from './'

const SearchCont = () => {
    const [videos, setVideos] = useState(null)
    const [selectCategory, setSelectCategory] = useState('')
    const { searchTerm } = useParams()
    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
    }, [searchTerm])
    if (!videos?.length) return <Loader />
    return (
        <main id="main">
            <aside id="aside">
                <CateGory selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
            </aside>
            <section id="contents">
                <h2>
                    <em>{searchTerm}</em> 를 검색하였습니다.
                </h2>
                <Videos videos={videos} />
            </section>
        </main>
    )
}
export default SearchCont
