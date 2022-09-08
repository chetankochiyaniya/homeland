import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-3 mb-5 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' width={200} />
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-3 py-2
             rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
