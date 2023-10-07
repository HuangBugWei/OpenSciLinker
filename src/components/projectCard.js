import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { auto } from "@popperjs/core";

export default function ActionAreaCard(props) {
  const { title, imgurl, contents } = props;

  return (
    <Card
      sx={{
        ":hover": {
          boxShadow: 20, // theme.shadows[20]
        },
        maxWidth: "80%",
        borderRadius: 3,
        display: "flex",
      }}
    >
      <CardActionArea
        onClick={() => console.log("hi")}
        sx={{ display: "flex" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            ml: 2,
            height: 200,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              flex: "1 0 auto",
              alignItems: "start",
              p: 0,
              pt: 2,
              pb: 2,
              m: 0,
              backgroundColor: "green",
            }}
          >
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {contents}
            </Typography>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 200, margin: 2, borderRadius: 2 }}
          src={imgurl}
          alt="Live from space album cover"
        />
      </CardActionArea>
    </Card>
  );
}
