import { Grid, Input, Typography } from "@mui/material";

const employerform = props => {
  return (
    <Grid
    container
    spacing={2}
    sx={{
        backgroundColor:"white",
        marginBottom: "30px",
        display: "block",
    }}

    >
   <Grid item xs={12}>
    <Typography component={'h1'} sx={{color:"black"}}>Employer's Form</Typography>
   </Grid>
   <Grid item xs={12} s={6} sx={{display:"flex"}}>
    <Typography 
    component={"label"} 
    htmlFor="id"
    sx={{
        color:"black",
        marginRight:"20px",
        fontSize:"16px",
        width:"100px",
        display: "block",
    }}
    >
        ID
    </Typography>
    <Input 
    type="number"
    id="id"
    name="id"
    sx={{width:"400px"}}
    value={""}
    onChange={ e => {}}
    
    />
   </Grid>

    </Grid>
  );
}

export default employerform