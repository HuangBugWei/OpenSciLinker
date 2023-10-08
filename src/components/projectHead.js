import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function projectHead(props) {
  const { title, imgurl } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        minWidth: "100vw",
        height: "50vh",
        // backgroundColor: 'darkblue',
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        sx={{
          flex: 1,
          // height: '90%',
          display: "flex",
          flexDirection: "column",
          // backgroundColor: 'green',
          padding: 0,
          margin: 0,
          justifyContent: "end",
        }}
      ></Box>
      <Box
        sx={{
          flex: 4,
          // height: '90%',
          display: "flex",
          flexDirection: "column",
          // backgroundColor: 'yellow',
          padding: 0,
          margin: 0,
          justifyContent: "end",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "black",
            fontSize: "400%",
            fontFamily: "sans-serif",
            fontWeight: 800,
            pl: "2vw",
            pb: "2vw",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 4,
          // height: '90%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          // backgroundColor: 'red',
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            height: "45vh",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${imgurl})`,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          // backgroundColor: 'green',
        }}
      ></Box>
    </Box>
  );
}
