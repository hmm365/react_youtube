import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HeaderCont, MainConts, VideoConts, ChannelCont, SearchCont } from './components/index'

const App = () => {
    return (
        <BrowserRouter>
            <HeaderCont />
            <Routes>
                <Route path="/" element={<MainConts />}></Route>
                <Route path="/video/:id" element={<VideoConts />}></Route>
                <Route path="/channel/:id" element={<ChannelCont />}></Route>
                <Route path="/search/:searcKeyword" element={<SearchCont />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
