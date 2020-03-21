import React from 'react'

const Results = ({video, id}) => {

    const handleClick =()=> {
        window.location=`http://localhost:3000/video/${id}`
    }
    return(
        <div className="video" videoid={id}>
                <img src={video.thumbnails.medium.url} alt=" " onClick={(e)=>handleClick(id)}/> 
            <p className="videoTitle" onClick={(e)=>handleClick(id)}>{video.title}</p>
        </div>
    )
}

export default Results