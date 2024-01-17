import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from "@mui/material";


const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "100dvh",
        maxWidth: "100dvw",
      }}
    >
      <Navbar />
      <main style={{ overflowY: "scroll" }}>
        <Button
          onClick={() => {
            
          }}
        >
          Notific
        </Button>
      </main>
    </div>
  );
};

export default HomePage;
