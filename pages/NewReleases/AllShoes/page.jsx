import React from "react";
import { Stack } from "@mui/material";
import Jordan from "../jordan/page";
import AirForce from "../AirForce/page";
import Vans from "../vans/page";

const page = () => {
  return (
    <Stack
      direction={"column"}
      spacing={6}
      sx={{ maxWidth: "80%", margin: "auto", paddingBottom: 4 }}
    >
      <Jordan />
      <AirForce />
      <Vans />
    </Stack>
  );
};

export default page;
