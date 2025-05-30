import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
const WomenReleases = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Typography>Women's Collection</Typography>
        <Button variant="outlined">Explore Collection</Button>
      </Box>
      <Grid container spacing={2} sx={{ display: "flex" }}>
        <Grid size={3}>
          <Stack spacing={2}>
            <Box sx={{ position: "relative" }}>
              <img
                src="/female.jpg"
                alt="Newestshoe"
                style={{ width: "100%", borderRadius: 8 }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  color: "white",
                  p: 1,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Nike Spo</Typography>
                <Typography variant="body2">Ksh.950</Typography>
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <img
                src="/gym.jpg"
                alt="Newestshoe"
                style={{ width: "100%", borderRadius: 8, position: "relative" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  color: "white",
                  p: 1,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Nike SN</Typography>
                <Typography variant="body2">Ksh.1500</Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid size={3}>
          <Stack spacing={2}>
            <Box sx={{ position: "relative" }}>
              <img
                src="/rebwomen.jpg"
                alt="Newestshoe"
                style={{ width: "100%", borderRadius: 8 }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  color: "white",
                  p: 1,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Reebok Runner</Typography>
                <Typography variant="body2">Ksh.2800</Typography>
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <img
                src="/ws.jpg"
                alt="Newestshoe"
                style={{ width: "100%", borderRadius: 8 }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  color: "white",
                  p: 1,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">Nike SNS</Typography>
                <Typography variant="body2">Ksh.2500</Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid size={6}>
          <img
            src="/womebeige.jpg"
            alt="Newestshoe"
            style={{
              width: "100%",
              height: "75%",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WomenReleases;
