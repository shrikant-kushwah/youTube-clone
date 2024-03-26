import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='grow w-[50%] h-[calc(100vh-4.36rem)] overflow-y- overflow-x-auto bg-white'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer;
