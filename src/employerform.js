import { useState, useEffect } from "react";
import { Button, Grid, Input, Typography } from "@mui/material";




const EmployerForm = ({createEmployer, submitted}) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName("");
        }
    }, [submitted])

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: "white",
                marginBottom: "30px",
                display: "block",
            }}

        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: "black" }}>Employer's Form</Typography>
            </Grid>
            <Grid item xs={12} s={6} sx={{ display: "flex" }}>
                <Typography
                    component={"label"}
                    htmlFor="id"
                    sx={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: "400px" }}
                    value={id}
                    onChange={e => setId(e.target.value)}

                />
            </Grid>
            <Grid item xs={12} s={6} sx={{ display: "flex" }}>
                <Typography
                    component={"label"}
                    htmlFor="id"
                    sx={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    NAME
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: "400px" }}
                    value={name}
                    onChange={e => setName(e.target.value)}

                />
            </Grid>
            <Button
                sx={{
                    margin: "auto",
                    marginBottom: "20px",
                    backgroundColor: "#00c6e6",
                    color: "black",
                    marginLeft: "20px",
                    marginRight: "20px",
                    "&:hover": {
                        opacity: "0.7",
                        backgroundColor: "#00c6e6",
                    }
                }}
                onClick={() => createEmployer({id , name})}

            >ADD</Button>

        </Grid>
    );
}

export default EmployerForm;