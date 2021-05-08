import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import CustomerResults from 'src/components/customer/CustomerResults';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <CustomerResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
