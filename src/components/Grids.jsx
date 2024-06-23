import { Grid } from '@mui/material';
import React from 'react'

function Grids() {
  return (
    <>
      <Grid container>
        <Grid item 
        xs={12}
        sm={8}
        md={6}
        lg={3}
        xl={1}

         sx={{background:"red"}}
        >sdg</Grid>
        <Grid item xs={4} sx={{background:"blue"}}>dsg</Grid>
      </Grid>
    </>
  );
}

export default Grids;
