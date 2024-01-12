import React from 'react'
import "./Video.css"
import Video_Main from "../img/video.png"
import Video_Sub from "../img/videosub.png"

const Video = () => {
  return (
    <section className='video-container'>
       
        <div className='video-sub'>
        <img src={Video_Sub} alt="" />
        </div>
        <div className='video'>
       <img src={Video_Main} alt="" />
       </div>
    </section>
  )
}

export default Video