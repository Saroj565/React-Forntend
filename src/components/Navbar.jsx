import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'

const Navbar = () => {
    const [value,setValue]=useState(0);
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h2">LOGO</Typography>
        <Tabs
          sx={{ marginLeft: "auto" }}
          value={value}
          onChange={(e, val) => {
            setValue(val);
          }}
          textColor=""
          indicatorColor="secondary"
        //   aria-label="navigation tabs"
        >
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
          <Tab label="Profile" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
