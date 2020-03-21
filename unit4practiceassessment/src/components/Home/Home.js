import React, { useState, useEffect } from 'react'
import axios from 'axios'
import API_KEY from '../../secrets'
import { useInput } from '../../util/customHooks'
import Results from '../Home/Results'

const Home = () => {
    const [ searchResults, setSearchResults ] = useState([]);
    // const [ resultList, setResultList ] = useState([])

    const searchInputObj = useInput("")
    const searchInput = searchInputObj.value

    const fetchSearchResults = async (url) => {
        try {
            let res = await axios.get(url)
            let searchResArr = res.data.items
            if (searchResArr.length === 0) {
                setSearchResults(`No results for ${searchInput} found!`)
            } else {
                setSearchResults(searchResArr)
                // setResultList(res.data.items)
            }
            debugger
        } catch (error) {
            console.log(error)
        }
    }


    // useEffect(() => {
    //     setSearchResults("NOTHING HERE YET")
    // }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        fetchSearchResults(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchInput}&key=${API_KEY}&order=relevance&type=video`)
    }

    const ResultList = searchResults.map((video) => {
        // <><Results key={video.id.videoId} id={video.id.videoId} video={video.snippet}/></>
        debugger
    })
    return (
        <div className={"search"}>
            <form onSubmit={handleSubmit}>
                <input id="searchInput" type="text" placeholder={"Search for videos here!"} {...searchInputObj}></input>
                <button type={"submit"}>Search</button>
            </form>
            <div>

            {ResultList}
                {/* This is where results will go? */}
                {/* {searchResults} */}
                {/* {searchInput} */}
            </div>
        </div>
    )
}

export default Home