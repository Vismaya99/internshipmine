import React from "react";
import { Box } from "@mui/system";
import Sidemenus from "./Dashboard";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "black", height: 900 }}>
        <Sidemenus />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            width: "80%",
            left: "15%",
            top: "0%",
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/inventory-management-words-white-paper-against-background-table-numbers-calculator-banknotes-inventory-215015659.jpg"
            alt="Your image" style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
