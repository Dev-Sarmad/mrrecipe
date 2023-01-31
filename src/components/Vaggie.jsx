import axios from "axios";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Vaggie() {
  const [vege, setVege] = useState([]);
  useEffect(() => {
    Api();
  }, []);
  const Api = async () => {
    const check = localStorage.getItem("vege");
    if (check) {
      setVege(JSON.parse(check));
    } else {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
      );
      localStorage.setItem("vege", JSON.stringify(api.data.recipes));
      setVege(api.data.recipes);
      console.log(api.data);
    }
  };

  return (
    <div>
      <Container>
        <h3>Vegetarian picks</h3>
        <Splide
          options={{
            perPage: 3,
            drag: "free",
            pagination: false,
            arrows: false,
            gap: "4rem",
          }}
        >
          {vege &&
            vege.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card sx={{ maxWidth: 345, height: 300 }}>
                    <Link to={"/recipe/" + recipe.id}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="250"
                          image={recipe.image}
                          alt={recipe.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {recipe.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
        </Splide>
      </Container>
    </div>
  );
}

export default Vaggie;
