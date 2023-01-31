import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <Container>
      <form
        onSubmit={handler}
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          onChange={(e) => setInput(e.target.value)}
          label="Search Rcipe"
          id="fullWidth"
          value={input}
          sx={{ textAlign: "center" }}
        />
      </form>
    </Container>
  );
}

export default Search;
