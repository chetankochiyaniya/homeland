import React, { useState, useContext } from 'react';
// import icons
import { RiCalendarCheckLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack } from '@mui/material';

const DateDropdown = () => {
  const { date, setDate } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const [checkin, setCheckIn] = React.useState(null);
  const [checkOut, setCheckOut] = React.useState(null);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiCalendarCheckLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {date}
          </div>
          <div className='text-[13px]'>Choose Date</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DatePicker
        label="Date"
        value={checkin}
        onChange={(newValue) => {
          console.log(newValue)
          setDate(newValue);
          setCheckIn(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
      </Menu.Items>
    </Menu>
  );
};

export default DateDropdown;
