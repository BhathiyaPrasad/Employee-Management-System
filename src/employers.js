import { Box } from '@mui/material';
import EmployerForm from './EmployerForm';
import UsersTable from './UsersTable';


const users = [
   {
    id: 1,
    Name: 'Bhathiya',
   },
   {
    id: 1,
    Name: 'Prasad',
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