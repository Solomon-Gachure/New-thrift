import React from "react";
import Hero from "./hero";
import { Stack } from "@mui/material";
import Layout from "./layout";
import MenReleases from "./menReleases";
import WomenReleases from "./womenReleases";
import KidsReleases from "./kidsReleases";

const NewReleases = () => {
  return (
    <Stack
      direction={"column"}
      spacing={6}
      sx={{ maxWidth: "80%", margin: "auto", paddingBottom: 4 }}
    >
      <Hero />
      <Layout />
      <MenReleases />
      <WomenReleases />
      <KidsReleases />
    </Stack>
  );
};

export default NewReleases;
