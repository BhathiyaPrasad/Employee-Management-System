import { Box } from '@mui/material';
import EmployerForm from './EmployerForm';
import UsersTable from './UsersTable';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Employers = () => {
  const [Employer, setEmployers] = useState([]);
 
  useEffect(() => {
   getEmployers();
  }, []);


  const getEmployers = () => {
   Axios.get('http://localhost:3001/api/employer')
   .then(response => {
      console.log(response.data?.response || "No Data");
      setEmployers(response.data?.response || "No Data");
   })
   .catch(error =>
    {
      console.log("Axios Error", error)
    }
   )
  }




 return (
<Box>
<EmployerForm />
<UsersTable rows={Employer} />
</Box>

 );

    
}
export default Employers;