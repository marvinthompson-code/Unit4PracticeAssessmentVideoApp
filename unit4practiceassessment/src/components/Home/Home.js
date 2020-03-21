import React, { useState } from 'react'
import axios from 'axios'
import API_KEY from '../../secrets'
import { useInput } from '../../util/customHooks'
import Results from './Results'

const Home = () => {
    const [ searchResults, setSearchResults ] = useState([]);
    const [ message, setMessage ] = useState([])

    const searchInputObj = useInput("")
    const searchInput = searchInputObj.value

    const fetchSearchResults = async (url) => {
        try {
            let res = await axios.get(url)
            let searchResArr = res.data.items
            if (searchResArr.length === 0) {
                setMessage(`No results for ${searchInput} found!`)
            } else {
                setSearchResults(searchResArr)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        fetchSearchResults(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchInput}&key=${API_KEY}&order=relevance&type=video`)
    }

    const resultList = searchResults.map((video, i) => {
        return(<><Results key={i} id={video.id.videoId} video={video.snippet}/></>)
    })

    const messageInfo = message + ''

    return (
        <div className={"search"}>
            <form onSubmit={handleSubmit}>
                <input id="searchInput" type="text" placeholder={"Search for videos here!"} {...searchInputObj} required></input>
                <button type={"submit"}>Search</button>
            </form>
            <div>
            {resultList}
            {messageInfo}
            </div>
        </div>
    )
}

export default Home