import React from "react";
import Navbar from "../../components/Navbar";

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
        
      </main>
    </div>
  );
};

export default HomePage;
