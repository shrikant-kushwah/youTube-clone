import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info);

  const {snippet, statistics} = info;
  const {channelTitle, thumbnails, title} = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img className='rounded-xl w-full h-full object-cover' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className='font-bold line-clamp-2'>{title}</li>
        <li className='text-gray-600'>{channelTitle}</li>
        <li className='text-gray-600'>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
};

export const AdsVideoCard = ({info})=>{
  return(
    <div className="p-1 m-1 border border-yellow-400">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
