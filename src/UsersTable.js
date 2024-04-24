import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = props => {
   <TableContainer component={Paper}>
       <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>POSITION</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            
        </TableBody>
       </Table>
   </TableContainer>
}
export default UsersTable;