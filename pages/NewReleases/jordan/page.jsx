import React from "react";
import jordanShoes from "./jordanData";
import { Box, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Image from "next/image";
const Jordan = () => {
  return (
    <Grid container spacing={4}>
      {jordanShoes.map((shoe) => (
        <Grid size={3}>
          <Card key={shoe.id}>
            <Box
              sx={{
                height: 170,
                width: "100%",
                position: "relative",
                padding: 1,
              }}
            >
              <Image
                src={shoe.image}
                alt={shoe.name}
                height={1440}
                width={1440}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </Box>
            <Box sx={{ paddingX: 2, paddingBottom: 1 }}>
              <Typography variant="subtitle2">{shoe.name}</Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "orange", fontWeight: "bold" }}
                >
                  Ksh.{shoe.price}
                </Typography>
                <IconButton size="small">
                  <Add fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Jordan;
