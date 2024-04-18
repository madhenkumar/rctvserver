"use client"
import React from 'react'
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

interface VideoPlayerProps {
    url: string; 
    title: string;
  }

const VidStackPlayer: React.FC<VideoPlayerProps> = ({ url,title }) => {
  
  return (
    <>
      <MediaPlayer title={title} src={url}>
        <MediaProvider />
        <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
      </MediaPlayer>
    </>
  )
}

export default VidStackPlayer