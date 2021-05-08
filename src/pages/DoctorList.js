import {useState ,useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import DoctorListResults from 'src/components/doctor/DoctorListResults';
import DoctorListToolbar from 'src/components/doctor/DoctorListToolbar';
import doctors from 'src/__mocks__/doctors';

const DoctorList = () => {

const URL = "http://localhost:8080/api/v1/doctors";

//const [doctors, setDoctors] = useState([]);

// useEffect(() => {
//     fetch(URL)
//     .then(response => response.json()
//     .then(data => {
//       setDoctors(data)
//     })
//     )
//   },[])

return (
    <>
      <Helmet>
        <title>Doctors </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <DoctorListToolbar />
          <Box sx={{ pt: 3 }}>
            <DoctorListResults doctors={doctors} />
          </Box>
        </Container>
      </Box>
    </>
  );

}

export default DoctorList;
