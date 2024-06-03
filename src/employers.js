import { Box } from '@mui/material';
import EmployerForm from './EmployerForm';
import UsersTable from './UsersTable';
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

  const getEmployers = async () => {
    try {
      const response = await Axios.get('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/employer');
      console.log('Response data:', response.data);
      const data = response.data?.response;
      if (Array.isArray(data)) {
        setEmployers(data);
      } else {
        console.error('Data is not an array:', data);
        setEmployers([]); // Handle unexpected response
      }
    } catch (error) {
      console.error("Axios Error", error);
      setEmployers([]); // Handle error state
    }
  };

  const createEmployer = async (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    try {
      await Axios.post('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/createemployer', payload);
      getEmployers();
      setSubmitted(false);
      setIsEdit(false);
    } catch (error) {
      console.error("Axios Error", error);
      setSubmitted(false); // Reset submission state on error
    }
  };

  const updateEmployer = async (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    try {
      await Axios.put('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/updateemployer', payload);
      getEmployers();
      setSubmitted(false);
      setIsEdit(false);
    } catch (error) {
      console.error("Axios Error", error);
      setSubmitted(false); // Reset submission state on error
    }
  };

  const deleteEmployer = async (data) => {
    try {
      await Axios.delete('https://abbd-2402-4000-21c0-16bf-699c-e08e-cdc8-ec81.ngrok-free.app/api/deleteemployer', { data });
      getEmployers();
    } catch (error) {
      console.error("Axios Error", error);
    }
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
    </Box>
  );
};

export default Employers;
