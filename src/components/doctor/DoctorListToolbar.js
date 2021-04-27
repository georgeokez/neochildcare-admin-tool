import React, {useState} from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import AddDoctorModal from './AddDoctorModal';

const DoctorListToolbar = (props) => {

return(
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>
          Import
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button>
        <AddDoctorModal />
      </Box>
      
    </Box>
  );
}

export default DoctorListToolbar;
