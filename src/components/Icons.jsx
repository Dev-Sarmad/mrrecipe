import { LunchDining, LocalPizza, KebabDining } from "@mui/icons-material/";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import React from "react";

function Icons() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <NavLink to={"/cuisine/Italian"}>
          <LunchDining />
          <h4>ITALIAN</h4>
        </NavLink>
        <NavLink to={"/cuisine/American"}>
          <KebabDining />
          <h4>American</h4>
        </NavLink>
        <NavLink to={"/cuisine/Japanese"}>
          <LocalPizza />
          <h4>Japnese</h4>
        </NavLink>
        <NavLink to={"/cuisine/Thai"}>
          <LocalPizza />
          <h4>Thai</h4>
        </NavLink>
      </Box>
    </Container>
  );
}

export default Icons;
