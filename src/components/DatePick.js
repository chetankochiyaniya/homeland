import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack } from '@mui/material';

export default function BasicDatePicker() {
  const [checkin, setCheckIn] = React.useState(null);
  const [checkOut, setCheckOut] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <Stack spacing={3}>
     <DatePicker
        label="Check-In"
        value={checkin}
        onChange={(newValue) => {
          setCheckIn(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        label="Check-Out"
        value={checkOut}
        onChange={(newValue) => {
          setCheckOut(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
     </Stack>
    </LocalizationProvider>
  );
}
