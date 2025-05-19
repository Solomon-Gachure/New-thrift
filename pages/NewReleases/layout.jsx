"use client";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Jordan from "./jordan/page";
import AirForce from "./AirForce/page";
import Vans from "./vans/page";
import AllShoes from "./AllShoes/page";

const Layout = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
      >
        <Tab label="All" />
        <Tab label="Jordan" />
        <Tab label="Airforce" />
        <Tab label="Vans" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {value === 0 && <AllShoes />}
        {value === 1 && <Jordan />}
        {value === 2 && <AirForce />}
        {value === 3 && <Vans />}
      </Box>
    </Box>
  );
};

export default Layout;
