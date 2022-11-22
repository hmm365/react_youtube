import React from 'react'
import { SearchBar } from './index'
import { BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HeaderCont = () => {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    <BsYoutube className="icon" />
                    Vocal Youtube
                </Link>
            </h1>

            <SearchBar />
        </header>
    )
}
export default HeaderCont
