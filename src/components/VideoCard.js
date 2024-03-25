import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);

  const {snippet, statistics} = info;
  const {channelTitle, thumbnails, title} = snippet;

  return (
    <div className='p-2 m-2 w-80 shadow-lg'>
      <img className='rounded-lg object-cover' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className='font-bold'>{title}</li>
        <li className='text-gray-600'>{channelTitle}</li>
        <li className='text-gray-600'>{statistics.viewCount}</li>
        <li></li>
      </ul>
    </div>
  )
}

export default VideoCard;
