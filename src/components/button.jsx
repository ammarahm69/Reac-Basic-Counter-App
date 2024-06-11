import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css'

export default function BasicButtons({type , onClick}) {

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained"style={{ margin: '12px' }}  onClick={onClick}>{type}</Button>
    </Stack>
  );
}
