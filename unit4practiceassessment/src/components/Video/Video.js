import React from 'react'
import {useParams} from 'react-router-dom'
import Youtube from 'react-youtube'

const Video = () => {
    let { id } = useParams()
      const opts = {
        height: '390',
        width: '640',
        playerVars: { 
          autoplay: 1
        }
      };
   
      const onReady = (event) => {
       event.target.pauseVideo();
     }

      return (
        <Youtube
          videoId={id}
          opts={opts}
          onReady={onReady}
        />
      );
  }
   

export default Video;