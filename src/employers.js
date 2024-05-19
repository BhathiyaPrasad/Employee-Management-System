import { Box } from '@mui/material';
import EmployerForm from './EmployerForm';
import UsersTable from './UsersTable';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Employers = () => {
  const [Employer, setEmployers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const[selectedEmployer, setSelectedEmployer] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getEmployers();
  }, []);


  const getEmployers = () => {
    Axios.get('http://localhost:3001/api/employer')
      .then(response => {
        console.log(response.data?.response || "No Data");
        setEmployers(response.data?.response || "No Data");
      })
      .catch(error => {
        console.log("Axios Error", error)
      })
  }


  const createEmployer = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    }
    Axios.post('http://localhost:3001/api/createemployer', payload)
      .then(() => {

        getEmployers()
        setSubmitted(false)
        isEdit(false);
      })
      .catch(error => {
        console.log("Axios Error", error)
      });

  }

  const updateEmployer = (data) => {
   setSubmitted(true);

   const payload = {
      id: data.id,
      name: data.name,
    }
  Axios.put('http://localhost:3001/api/updateeemployer', payload)
      .then(() => {

        getEmployers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch(error => {
        console.log("Axios Error", error)
      });

  }



  return (
    <Box>
      <EmployerForm
        createEmployer={createEmployer}
        submitted={submitted}
        data={selectedEmployer}
      />
      <UsersTable 
      rows={Employer}
      selectedEmployer={data => {
   setSelectedEmployer(data);
   isEdit(true)
      }}
      />
    </Box>

  );


}
export default Employers;