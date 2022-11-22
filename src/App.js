/** @format */

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainConts, VideoConts, ChannelCont, SearchCont, HeaderCont } from './components'

const App = () => {
    return (
        <BrowserRouter>
            <HeaderCont />
            <Routes>
                <Route path="/" element={<MainConts />}></Route>
                <Route path="/video/:id" element={<VideoConts />}></Route>
                <Route path="/channel/:id" element={<ChannelCont />}></Route>
                <Route path="/search/:searchKeyword" element={<SearchCont />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
