import React, { useEffect } from 'react'
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { SUBSCRIPTIONS_IMAGE } from '../utils/constants';

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('v'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <div className=' flex px-5 w-full'>
        <div>
        <iframe
          width="800"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get('v')}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </iframe>
        {/* <div className=''>
          <div className='p-2 m-2'>
            <h1 className='font-bold text-xl'>title</h1>
            <span className='flex'>
              <span className='flex items-center'>
              <img 
                className='h-12 w-12' 
                src={SUBSCRIPTIONS_IMAGE} 
                alt="usericon" 
                />
              <ul className=''>
                <li className='mx-2 font-bold text-md'>Channel Title</li>
                <li className='mx-2 text-sm'>100k subscribers</li>
              </ul>
              </span>
            <span className='flex'>
            <button className=''>Subscribers</button>
            <span className=''>
            <button>Like</button>
            <button>Dislike</button>
            </span>
            <button>Share</button>
            </span>
            </span>
            
          </div>
        </div> */}
        </div>
        <div className='w-full'>
          <LiveChat/>
        </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage;
