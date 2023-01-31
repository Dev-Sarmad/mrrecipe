import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  const params = useParams();
  const fetchdetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detaildata = await data.json();
    setDetails(detaildata);
    console.log(details)
  };
  useEffect(() => {
    fetchdetails();
  }, [params.name]);
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={details.title} />
        <CardMedia
          component="img"
          height="194"
          image={details.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {details.summary}
            {details.instructions}
          </Typography>
        </CardContent>
      </Card>
        <ul>
          {/* {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))} */}
        </ul>
    </Container>
  );
}

export default Recipe;
