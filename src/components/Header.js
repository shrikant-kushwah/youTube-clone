import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  const searchCache = useSelector((store)=>store.search);
  useEffect(() => {
    // API call


    // make an API call after evry key press
    // but if the differnce b/w 2 API calls is <200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions()
      }

    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  /**
   * 
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms 
   * 
   * key - ip
   * - destroy the component (useEffect return method)
   * - re-render the component 
   * - useEffect();
   * - start timer => make api call after 200ms
   * - it is same timer, is the new timer.
   */

  const getSearchSuggestions = async () => {
    // console.log("API call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // Update Cache
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg sticky top-0 bg-white'>
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
      <div className=' col-span-10 px-10'>
        <div className='flex'>
          <input
            className='w-9/12 h-10 border border-gray-400 p-4 rounded-l-full'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            type="text"
          // placeholder='Search'
          />
          <button
            className='border border-gray-400 rounded-r-full h-10 px-4 py-1 text-lg bg-gray-100'>🔍</button>
          <img
            className='h-10 mx-2 cursor-pointer' src="https://media.istockphoto.com/id/516447868/vector/microphone-vector-icon-voice-control-application-logo-concept.jpg?s=612x612&w=0&k=20&c=7sjYeENawmZMpShhiHCZBzeEyDSnzBVrZYADbiUxUkM=" alt="search-your-voice"
          />
        </div>
        {showSuggestions && (
          <div
            className='fixed bg-white py-2 px-5 w-[36rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map((s) => <li key={s} className='py-2 hover:bg-gray-100'>🔍 {s}</li>)}

            </ul>
          </div>
        )}
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
