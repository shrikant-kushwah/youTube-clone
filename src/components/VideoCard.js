import React from 'react'
import { SUBSCRIPTIONS_IMAGE } from '../utils/constants';

const VideoCard = ({info}) => {
  // console.log(info);

  const {snippet, statistics} = info;
  const {channelTitle, thumbnails, title} = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img className='rounded-xl w-full h-full object-cover' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <span className='flex items-center py-2'>
          <img className='w-12 h-12' src={SUBSCRIPTIONS_IMAGE} alt="usericon" />
          <li className='font-bold line-clamp-2 mx-2'>{title}</li>
        </span>
        <span className='flex flex-col ml-12 -mt-2 text-sm font-semibold text-gray-500'>
        <li className='text-gray-600 mx-2'>{channelTitle}</li>
        <li className='text-gray-600 mx-2'>{statistics.viewCount} views</li>
        </span>
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
