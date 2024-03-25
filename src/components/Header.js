import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu"
        />
        <a href='/'>
          <img
            className='h-16 -mt-4 mx-2'
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="youtube-logo"
          />
        </a>
      </div>
      <div className='flex col-span-10 px-10'>
        <input
          className='w-9/12 h-10 border border-gray-400 p-2 rounded-l-full' type="text" placeholder='Search'
        />
        <button
          className='border border-gray-400 rounded-r-full h-10 px-4 py-1 text-lg bg-gray-100'>🔍</button>
        <img
          className='h-10 mx-2 cursor-pointer' src="https://media.istockphoto.com/id/516447868/vector/microphone-vector-icon-voice-control-application-logo-concept.jpg?s=612x612&w=0&k=20&c=7sjYeENawmZMpShhiHCZBzeEyDSnzBVrZYADbiUxUkM=" alt="search-your-voice"
        />
      </div>
      <div className='flex col-span-1'>
        <img
          className='h-10 cursor-pointer' src="https://static.thenounproject.com/png/5109176-200.png" alt=""
        />
        <img
          className='h-10 bg-white cursor-pointer' src="https://media.istockphoto.com/id/1137403396/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-th%C3%B4ng-b%C3%A1o-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-chu%C3%B4ng-vector-trong-d%C3%B2ng.jpg?s=612x612&w=0&k=20&c=TYPahB2y-JBYaneImHCr8gRLKXqBWLdfa0OMxxqAtXM=" alt=""
        />
        <img
          className='h-10 cursor-pointer' src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="user-icon"
        />
      </div>
    </div>
  )
}

export default Header;
