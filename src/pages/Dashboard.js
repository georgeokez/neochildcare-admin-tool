import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
//import Budget from 'src/components/dashboard//Budget';
import DashboardCard from 'src/components/dashboard/DashboardCard';
import LatestOrders from 'src/components/dashboard/LatestOrders';
import LatestProducts from 'src/components/dashboard/LatestProducts';
import Sales from 'src/components/dashboard/Sales';
import TasksProgress from 'src/components/dashboard/TasksProgress';
import TotalCustomers from 'src/components/dashboard/TotalCustomers';
import TotalProfit from 'src/components/dashboard/TotalProfit';
import TrafficByDevice from 'src/components/dashboard/TrafficByDevice';
import DoctorToCustomer from 'src/components/dashboard/DoctorToCustomer';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import {HowToRegIcon} from '@material-ui/icons';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { green, red, indigo, orange, blue } from '@material-ui/core/colors';


const Dashboard = () => (
  <>
    <Helmet>
      <title>Neochildcare BackOffice Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DashboardCard 
              message="TOTAL CUSTOMERS" 
              numbers="1,240"
              percentage="14"
              color="green"
              percentColor="green"
              arrowType={<ArrowUpwardIcon sx={{ color: green[500] }} />}
              icon={<PeopleIcon />}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DashboardCard 
              message="TOTAL DOCTORS" 
              numbers="570"
              percentage="7"
              color="blue"
              percentColor="red"
              arrowType={<ArrowDownwardIcon sx={{ color: red[900] }} />}
              icon={<PermIdentityIcon />}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DashboardCard 
              message="VIRTUAL CONSULTATIONS" 
              numbers="1,470"
              percentage="21"
              color="orange"
              percentColor="green"
              arrowType={<ArrowUpwardIcon sx={{ color: green[900] }} />}
              icon={<ContactPhoneIcon />}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <DashboardCard 
              message="WELLNESS CHECKS" 
              numbers="1,320"
              percentage="4"
              color="violet"
              percentColor="green"
              arrowType={<ArrowUpwardIcon sx={{ color: green[900] }} />}
              icon={<NoteAddIcon />}
            />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
            {/* <DoctorToCustomer sx={{ height: '100%' }} /> */}
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
