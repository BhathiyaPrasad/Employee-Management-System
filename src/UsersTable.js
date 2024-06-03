import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const UsersTable = ({ rows, selectedEmployer, deleteEmployer }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>NAME</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => selectedEmployer({ id: row.id, name: row.name })}
                                    >
                                        UPDATE
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => deleteEmployer({ id: row.id })}
                                    >
                                        DELETE
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={3} sx={{ textAlign: 'center', padding: 2 }}>
                                    No Data
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;
