import { Box } from '@mui/material';
import EmployerForm from './EmployerForm';
import UsersTable from './UsersTable';
import SideMenu from './sidemenu';
import Axios from 'axios';
import { useState, useEffect } from 'react';

const Employers = () => {
  const [employers, setEmployers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getEmployers();
  }, []);

  const getEmployers = () => {
    Axios.get('http://localhost:3001/api/employer',{
      headers: {
        'ngrok-skip-browser-warning':'test'
      }
    })
      .then(response => {
        const data = response.data?.response;
        if (Array.isArray(data)) {
          setEmployers(data);
        } else {
          setEmployers([]); // Handle unexpected response
        }
      })
      .catch(error => {
        console.error("Axios Error", error);
        setEmployers([]); // Handle error state
      });
  };

  const createEmployer = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post('http://localhost:3001/api/createemployer', payload)
      .then(() => {
        getEmployers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.error("Axios Error", error);
      });
  };

  const updateEmployer = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.put('http://localhost:3001/api/updateemployer', payload)
      .then(() => {
        getEmployers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch(error => {
        console.error("Axios Error", error);
      });
  };

  const deleteEmployer = (data) => {
    Axios.delete('http://localhost:3001/api/deleteemployer', { data })
      .then(() => {
        getEmployers();
      })
      .catch(error => {
        console.error("Axios Error", error);
      });
  };

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
        rows={employers}
        selectedEmployer={data => {
          setSelectedEmployer(data);
          setIsEdit(true);
        }}
        deleteEmployer={data => { if (window.confirm('Are you sure?')) deleteEmployer(data); }}
      />
      <SideMenu/>
    </Box>
  );
};

export default Employers;
