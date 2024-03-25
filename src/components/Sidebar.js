import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

// Early Return Pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold pt-5'>You </h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch Later</li>
        <li>Show more</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Akshay Saini</li>
        <li>Engiladka</li>
        <li>Learning</li>
        <li>Tech burner</li>
        <li>News10</li>
        <li>StreetLive</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sport</li>
      </ul>
    </div>
  )
}

export default Sidebar;
