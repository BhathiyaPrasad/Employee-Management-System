import { Box } from '@mui/material';
import EmployerForm from './EmployerForm';
import UsersTable from './UsersTable';
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Employers = () => {
  const [Employer, setEmployers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedEmployer, setSelectedEmployer] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getEmployers();
  }, []);


  const getEmployers = () => {
    Axios.get('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/employer')
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
    Axios.post('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/createemployer', payload)
      .then(() => {

        getEmployers()
        setSubmitted(false)
        setIsEdit(false)
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
    Axios.put('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/updateemployer', payload)
      .then(() => {

        getEmployers()
        setSubmitted(false)
        setIsEdit(false)
      })
      .catch(error => {
        console.log("Axios Error", error)
      });

  }
  const deleteEmployer = (data) => {
    Axios.delete('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/deleteemployer', {data: data})
      .then(() => {
      getEmployers();
      })
      .catch(error => {
        console.log("Axios Error", error)
      });
  }



  return (
    <Box>
      <EmployerForm
        createEmployer={createEmployer}
        updateEmployer={updateEmployer}
        submitted={submitted}
        data={selectedEmployer}
        isEdit={isEdit}
      />
      <UsersTable
        rows={Employer}
        selectedEmployer={data => {
          setSelectedEmployer(data);
          setIsEdit(true);
 }}
 deleteEmployer={data => {window.confirm('Are you sure?') && deleteEmployer(data)}}
      />
    </Box>

  );


}
export default Employers;