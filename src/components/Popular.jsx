import axios from "axios";
import { Link } from "react-router-dom";
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

function Popular() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api();
  }, []);
  const Api = async () => {
    const check = localStorage.getItem("data");
    if (check) {
      setData(JSON.parse(check));
    } else {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      localStorage.setItem("data", JSON.stringify(api.data.recipes));
      setData(api.data.recipes);
      console.log(api.data);
    }
  };

  return (
    <div>
      <Container>
        <h3>popular picks</h3>
        <Splide
          options={{
            perPage: 4,
            drag: "free",
            pagination: false,
            arrows: false,
            gap: "5rem",
          }}
        >
          {data &&
            data.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card sx={{ maxWidth: 345, height: 250 }}>
                    <Link to={"/recipe/" + recipe.id}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
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

// const Wrapper  = styled.div`
// margin: 4rem 0rem ;
// `;
// const Card = styled.div`
// min-height:25rem;
// border-radius : 2rem;
// overflow :hidden;
//  img{
//   border-radius : 2rem ;
//  }
// `;

export default Popular;
