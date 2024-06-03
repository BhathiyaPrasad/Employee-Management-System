import React, { useState, useEffect } from 'react';
import { Button, Grid, Input, Typography } from '@mui/material';

const EmployerForm = ({ createEmployer, isEdit, updateEmployer, submitted, data }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '30px',
                maxWidth: '600px',
                margin: 'auto',
            }}
        >
            <Grid item xs={12}>
                <Typography component="h1" variant="h5" sx={{ color: 'black', marginBottom: '20px', textAlign: 'center' }}>
                    Employer's Form
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                    component="label"
                    htmlFor="id"
                    sx={{
                        color: 'black',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '100%', maxWidth: '400px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <Typography
                    component="label"
                    htmlFor="name"
                    sx={{
                        color: 'black',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    NAME
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '100%', maxWidth: '400px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '30px' }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#00c6e6',
                        color: 'black',
                        padding: '10px 20px',
                        '&:hover': {
                            opacity: '0.8',
                            backgroundColor: '#00c6e6',
                        },
                    }}
                    onClick={() => (isEdit ? updateEmployer({ id, name }) : createEmployer({ id, name }))}
                >
                    {isEdit ? 'Update' : 'Add'}
                </Button>
            </Grid>
        </Grid>
    );
};

export default EmployerForm;
