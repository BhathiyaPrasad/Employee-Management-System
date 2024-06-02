import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows, selectedEmployer, deleteEmployer }) => {
    return(
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {
                rows.length > 0 ?   rows.map(row => (
                        <TableRow key={row.id} sx={{ '&:last-child td,&:last-child th': { border: 0 } }}>
                            <TableCell component={"th"} scope="row">{row.id}</TableCell>
                            <TableCell component={"th"} scope="row">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onClick={() => selectedEmployer({id: row.id, name: row.name})}
                                >
                                    UPDATE
                                </Button>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onClick={() => deleteEmployer({id: row.id,})}
                                >
                                    DELETE
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                   :  <TableRow sx={{ '&:last-child td,&:last-child th': { border: 0 } }}>
                   <TableCell component={"th"} >No Data</TableCell>
                   </TableRow>
                }
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default UsersTable;