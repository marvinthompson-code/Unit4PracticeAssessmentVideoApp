import React, { useState, useEffect } from 'react'
import axios from 'axios'
import API_KEY from '../../secrets'
import { useInput } from '../../util/customHooks'
import Search from './Search'

const Home = () => {
    // const [ input, setInput] = useState("hi")
    const [ searchResults, setSearchResults ] = useState([]);

    const searchInputObj = useInput("")
    const searchInput = searchInputObj.value

    const fetchSearchResults = async (url) => {
        try {
            let res = await axios.get(url)
            debugger
        } catch (error) {
            console.log(error)
        }
    }

   

    useEffect(() => {
        setSearchResults("NOTHING HERE YET")
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        fetchSearchResults(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`)
        // let res = await axios.get(`https://www.googleapis.com/youtube/v3/search`)
    }
    return (
        <div className={"search"}>
            <form onSubmit={handleSubmit}>
                <input id="searchInput" type="text" placeholder={"Search for videos here!"} {...searchInputObj}></input>
                <button type={"submit"}>Search</button>
            </form>
            <div>
                {/* This is where results will go? */}
                {searchResults}
                {searchInput}
            </div>
        </div>
    )
}

export default Home