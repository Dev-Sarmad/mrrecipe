import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [searchedrecipe, setSearchedrecipe] = useState([]);
  let params = useParams();
  const getsearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedrecipe(recipes.results);
  };
  useEffect(() => {
    getsearched(params.search);
  }, [params.search]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
        flexWrap: "wrap",
      }}
    >
      {searchedrecipe.map((item) => {
        return (
          <Card key={item.id} sx={{ maxWidth: 345, height: 250 }}>
            <Link to={"/recipe/"+ item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
          </Card>
        );
      })}
    </Box>
  );
}

export default Searched;
