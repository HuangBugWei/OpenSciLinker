import React from "react";
import { TextField, Button, Box } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function PostPage() {
  const [postData, setPostData] = React.useState({
    title: "",
    content: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the post data to your API
  };
  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "40vh",
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "black",
            fontSize: "500%",
            fontFamily: "sans-serif",
            fontWeight: 900,
            p: 5,
          }}
        >
          Create Your Open Science
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100vw",
          backgroundColor: "orange",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            backgroundColor: "green",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontSize: "150%",
                fontWeight: 700,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
                p: 1,
                pl: 2,
              }}
            >
              Give your project a fancy name!
            </Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
