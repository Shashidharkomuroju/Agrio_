import React from 'react'

// import video from "../../../../assets/video.mp4";
import video1 from "../../../../assets/video2.mp4";

const Video = () => {
  return (
    <div>
        <video src={video1} autoPlay loop muted></video>
    </div>
  )
}

export default Video