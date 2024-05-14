import { Box } from '@mui/material';
import EmployerForm from './EmployerForm';
import UsersTable from './UsersTable';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Employers = () => {
  const [Employers, setEmployers] = useState([]);
 
  useEffect(() => {
   getEmployers();
  }, []);



  const getEmployers = () => {
   axios.get('http://localhost:3001/api/employer')
   .then(response => {
      console.log(response);
   })
  }
}



const Employersdata = () => {

 return (
<Box>
<EmployerForm />
<UsersTable rows={Employers} />
</Box>

 );

    
}
export default Employersdata;