import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SUBSCRIPTIONS_IMAGE } from '../utils/constants';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className='p-4 left-0 shadow-lg w-auto bg-white overflow-y-scroll overflow-x-hidden h-[calc(100vh-4.36rem)] sticky top-20 bottom-0 transition-all'>
      <ul>
        <Link className='flex' to="/">
          <img className='w-8 h-8 -mt-1' src="https://t3.ftcdn.net/jpg/06/90/99/14/360_F_690991487_DxPr6XooHnzJ530dkWXnSQMs8E7Sw3qj.jpg" alt="home" />
          <li
            className='font-semibold mx-4'
          >Home</li>
        </Link>
        <Link className='flex py-3'>
          <img className='w-8 h-8' src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png" alt="shorts" />
          <li className='mx-4 font-semibold'>Shorts</li>
        </Link>
        <Link className='flex'>
          <img className='w-6 h-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoL5gHlcuaNv6Q0x1bAcRk3IpSQcxtKHMgo-92ov1Tg&s" alt="" />
          <li className='font-semibold mx-5'>Subscriptions</li>
        </Link>
      </ul>
      <h1 className='font-bold text-xl pt-5'>You ➡️</h1>
      <ul>
        <Link className='flex py-2'>
          <img className='w-8 h-8 -ml-1' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" alt="usericon" />
          <li className='font-semibold mx-4 truncate'>Your channel</li>
        </Link>
        <Link className='flex py-1'>
          <img className='w-6 h-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2aOcZMW09Jo5e82w9DiV5SV3spxWARok8fGI_NnXm6JIVxeGWJ1c6W0Twz-3MtDrMD-c&usqp=CAU" alt="history" />
          <li className='mx-5 font-semibold'>History</li>
        </Link>
        <Link className='flex py-2'>
          <img className='w-10 h-10 -mt-[7px] -ml-2' src="https://us.123rf.com/450wm/alfianiqbal/alfianiqbal2004/alfianiqbal200400151/145053856-video-icon-logo-vector-illustration-video-player-icon-design-vector-template-trendy-video-vector.jpg?ver=6" alt="ypur-videos" />
          <li className='mx-3 font-semibold truncate'>Your-videos</li>
        </Link>
        <Link className='flex'>
          <img
            className='h-6 -ml-3' src="https://www.iconbolt.com/preview/twitter/material-icons-rounded/watch-later.svg" alt="watch-later" />
          <li className='font-semibold mx-2 truncate'>Watch Later</li>
        </Link>
        <Link className='flex py-4'>
          <img className='w-6 h-6 -ml-1' src="https://t4.ftcdn.net/jpg/06/26/73/23/360_F_626732367_2htTLozKSfEsLLy6uwaKniEQKkVgbwAN.jpg" alt="" />
          <li className='font-semibold mx-4 truncate'>Show more</li>
        </Link>
      </ul>
      <h1 className='font-bold text-xl pt-2'>Subscriptions</h1>
      <ul>
        <Link className='flex py-4'>
          <img className='w-6 h-6' src={SUBSCRIPTIONS_IMAGE} alt="userimg" />
          <li className='font-semibold mx-4 truncate'>Akshay Saini</li>
        </Link>
        <Link className='flex py-1'>
          <img className='h-6 w-6' src={SUBSCRIPTIONS_IMAGE} alt="userimg" />
          <li className='mx-4 font-semibold'>Engiladka</li>
        </Link>
        <Link className='flex py-4'>
          <img className='h-6 w-6' src={SUBSCRIPTIONS_IMAGE} alt="" />
          <li className='mx-4 font-semibold'>Learning</li>
        </Link>
        <Link className='flex py-2'>
          <img className='h-6 w-6' src={SUBSCRIPTIONS_IMAGE} alt="" />
          <li className='mx-4 font-semibold truncate'>Tech burner</li>
        </Link>
        <Link className='flex py-3'>
          <img className='h-6 w-6' src={SUBSCRIPTIONS_IMAGE} alt="" />
          <li className='mx-4 font-semibold'>News10</li>
        </Link>
        <Link className='flex py-3'>
          <img className='h-6 w-6' src={SUBSCRIPTIONS_IMAGE} alt="" />
          <li className='mx-4 font-semibold'>StreetLive</li>
        </Link>
      </ul>
      <h1 className='font-bold text-xl pt-5'>Explore</h1>
      <ul>
        <Link className='flex'>
        <img className='w-16 h-16 -ml-5' src="https://thumbs.dreamstime.com/b/youtube-trending-button-icon-vector-isolated-white-background-icon-youtube-trending-button-icon-vector-isolated-white-222289789.jpg" alt="" />
        <li className='font-semibold mt-5 '>Trending</li>
        </Link>
        
        <Link className='flex'>
          <img className='w-7 h-7 -ml-1' src="https://i.pinimg.com/736x/7b/64/82/7b6482cf06d39fe6362f27aa9dd17aea.jpg" alt="" />
        <li className='mx-5 font-semibold'>Music</li>
        </Link>
        
        <Link className='flex py-2'>
          <img className='h-9 w-9 -ml-2' src="https://vectorstate.com/stock-photo-preview/106287215/350/ist_24991_03490.jpg" alt="" />
        <li className='font-semibold mx-4 mt-2'>Films</li>
        </Link>
        
        <Link className='flex'>
        <img className='h-9 w-9 -ml-2' src="https://static.vecteezy.com/system/resources/previews/005/260/970/non_2x/live-stream-live-icon-live-streaming-icon-symbol-free-vector.jpg" alt="" />
        <li className='font-semibold mx-4 mt-1'>Live</li>
        </Link>
        
        <Link className='flex py-2'>
        <img className='h-5 -ml-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKpdg8TJmBypse3uh2iQBo_RbVYyaO5gSU1CUSkkowA&s" alt="" />
        <li className='font-semibold mx-4 -mt-1'>Gaming</li>
        </Link>
        
        <Link className='flex py-2'>
          <img className='h-8 w-8 -ml-1' src="https://png.pngtree.com/element_our/sm/20180516/sm_5afc4cd0dcaca.jpg" alt="" />
        <li className='font-semibold mx-5'>News</li>
        </Link>
        
        <Link className='flex py-2'>
          <img className='h-9 w-9 -ml-2' src="https://static.vecteezy.com/system/resources/previews/006/796/597/non_2x/cute-trophy-flat-design-illustration-free-vector.jpg" alt="" />
        <li className='font-semibold mx-4 mt-1'>Sport</li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Sidebar;
