
"use client"
import React from 'react'
import Navbar from './_components/Navbar'
import VidStackPlayer from './_components/VidStackPlayer'

const page = () => {
  return (
    <>
    <Navbar  />
      <div className="container mx-auto px-4 py-8 mt-12">
      <h2 className="text-white text-2xl mb-4 mt-8 font-bold pl-4 border-l-4 border-purple-600">RC TV</h2>
        {/* <VideoPlayer url={videoUrl1} /> */}
        <VidStackPlayer title='RC TV' url ="http://rctv.7starcloud.com:1935/rctv/live/live.m3u8"/>
        <h2 className="text-white text-2xl mb-4 mt-8 font-bold pl-4 border-l-4 border-purple-600">RC Music</h2>
        <VidStackPlayer title='RC MUSIC' url ="https://rctv.7starcloud.com:1935/rcmusic/live/live.m3u8"/>
        {/* <VideoPlayer url={videoUrl} /> */}
        <h2 className="text-white text-2xl mb-4 mt-8 font-bold pl-4 border-l-4 border-purple-600">More to Watch</h2>
        </div>

        
    </>
  )
}

export default page