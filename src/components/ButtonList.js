import React from 'react'
import Button from './Button';

const ButtonList = () => {

  const btnList = [
    "ALl",
    "Music",
    "Holi",
    "Live",
    "Dramedy",
    "Rapping",
    "Courses",
    "Recently uploaded",
    "Watched"
  ];

  return (
    <div className='flex font-semibold text-gray-600'>
      {btnList.map((btmName, index) => (
        <Button name={btmName} key={index}
        />
      ))}
    </div>
  )
}

export default ButtonList;
