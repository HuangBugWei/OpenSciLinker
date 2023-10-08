import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export default function ActionAreaCard(props) {
  const { title, imgurl, contents } = props;

  return (
    <Card
      sx={{
        ":hover": {
          boxShadow: 20, // theme.shadows[20]
        },
        maxWidth: "100%",
        borderRadius: 3,
        display: "flex",
      }}
    >
      <CardActionArea
        onClick={() => console.log("hi")} // navigate to project page
        sx={{ display: "flex" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 3,
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
              m: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                component="div"
                variant="h5"
                sx={{
                  flexGrow: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  backgroundColor: "green",
                }}
              >
                {title}
              </Typography>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  backgroundColor: "blue",
                }}
              >
                similarity
              </Typography>
            </Box>
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
              sx={{
                fontSize: "150%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
              }}
            >
              {contents}
            </Typography>
          </Box>
        </Box>

        <CardMedia
          sx={{
            flex: 1,
            height: 200,
            margin: 2,
            borderRadius: 2,
            backgroundColor: "green",
          }}
          component="img"
          src={imgurl}
          alt="Live from space album cover"
        />
      </CardActionArea>
    </Card>
  );
}
