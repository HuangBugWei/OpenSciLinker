import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        ":hover": {
          boxShadow: 20, // theme.shadows[20]
        },
        maxWidth: "90%",
        borderRadius: 3,
        display: "flex",
      }}
    >
      <CardActionArea onClick={() => console.log("hi")}>
        <CardMedia
          component="img"
          height="140"
          src="https://source.unsplash.com/random?wallpapers"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
