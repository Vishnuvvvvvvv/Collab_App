import React from 'react'
import "./VideoConference.css"
import VideoElement from './VideoElement'

function VideoConference() {
  return (
    <div className='videoConference'>
           
           <div className="section1">
                <VideoElement/>
                <VideoElement/>
                <VideoElement/>
           </div>

           <div className="section2">
           <VideoElement/>
           <VideoElement/>
           <VideoElement/>
           </div>

    </div>
  )
}

export default VideoConference