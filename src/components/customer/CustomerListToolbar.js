import {
  Box,
  Button
} from '@material-ui/core';
import AddCustomerModal from './AddCustomerModal';

const CustomerListToolbar = (props) => (
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
      <AddCustomerModal />
    </Box>
  </Box>
);

export default CustomerListToolbar;