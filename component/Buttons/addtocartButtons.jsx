import { ShoppingBag } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const AddtocartButtons = () => {
  return (
    <Button
      variant="contained"
      disableElevation
      //   endIcon={<ShoppingBag />}
      sx={{
        height: "40px",
        borderRadius: "999px",
        backgroundColor: "#1C1C1C",
        "&:hover": {
          backgroundColor: "#28a745",
        },
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddtocartButtons;
