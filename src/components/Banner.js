import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';
import DatePick from './DatePick';

const Banner = () => {
  return (
    <section className='h-full max-h-[440px] mb-8 xl:mb-5'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-2xl font-semibold leading-none mb-1'>
            <span className='text-violet-700'>Rent</span> Your Dream House With
            Us.
          </h1>
          <p className=' mb-8'>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
        </div>
        {/* <div className='hidden flex-1 lg:flex justify-end items-end mr-[135px] '>
          <img src={Image} alt='' width={350}/>
        </div> */}
      </div>
      <Search />
      {/* <DatePick /> */}
    </section>
  );
};

export default Banner;
