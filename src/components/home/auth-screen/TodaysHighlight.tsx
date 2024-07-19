"use client";

import { CldVideoPlayer } from "next-cloudinary";

const TodaysHighlight = () => {
	return (
    <div className='w-full md:w-3/4 mx-auto'>
      <CldVideoPlayer
        width='960'
        height='540'
        className='rounded-md'
        src='fo46rgxomi5bcmwicmur'
      />
    </div>
  )
};
export default TodaysHighlight;
