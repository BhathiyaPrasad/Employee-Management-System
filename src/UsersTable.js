import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ rows, selectedEmployer }) => {
    return(
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
                {
                rows.length > 0 ?   rows.map(rows => (
                        <TableRow key={rows.id} sx={{ '&:last-child td,&:last-child th': { border: 0 } }}>
                            <TableCell component={"th"} scope="row">{rows.id}</TableCell>
                            <TableCell component={"th"} scope="row">{rows.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onclick={() => selectedEmployer({id: rows.id, name:rows.name})}
                                >
                                    UPDATE
                                </Button>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onclick={() => {}}
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