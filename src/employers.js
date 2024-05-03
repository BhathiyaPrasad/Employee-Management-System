import { Box } from '@mui/material';
import EmployerForm from './Employerform';
import UsersTable from './UsersTable';


const users = [
   {
    id: 1,
    name: 'Bhathiya',
   },
   {
    id: 1,
    name: 'Prasad',
   }
];



const Employers = () => {

 return (
<Box>
<EmployerForm />
<UsersTable rows={users} />
</Box>

 );

    
}
export default Employers;