import React from "react";
import { Box } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useBar } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { postproject } from "../axios";

export default function PostPage() {
  const { email } = useBar();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitInfo = {
      title: title,
      content: content,
      author_email: email,
      url: link,
    };
    const result = await postproject(submitInfo);
    // if (result.isSuccess === 1) {
    //   setAuth(true);
    //   setUser(result.username);
    //   setEmail(result.email);
    //   setErrmsg("");
    //   navigate("/search");
    // } else {
    //   setErrmsg(result.message);
    // }
    // console.log("in signin.js", result);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "40vh",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            width: "200px",
            height: "80px",
            position: "absolute",
            top: "4vh",
            left: "4vw",
            fontSize: "18px",
            backgroundColor: "#6A6AFF",
          }}
          onClick={() => {
            navigate("/search");
          }}
        >
          Back to Search
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            width: "200px",
            height: "80px",
            position: "absolute",
            top: "4vh",
            right: "4vw",
            fontSize: "18px",
            backgroundColor: "#6A6AFF",
          }}
          onClick={() => {
            navigate("/ownproject");
          }}
        >
          Your Own Projects
        </Button>
        <Typography
          variant="h1"
          sx={{
            color: "white",
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          //   backgroundColor: "orange",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "green",
          }}
        >
          <Stack spacing={2} padding={2}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontSize: "180%",
                fontWeight: 700,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                p: 1,
                pl: 0,
              }}
            >
              Give your project a fancy name!
            </Typography>
            <TextField
              id="title"
              placeholder="type your project title"
              fullWidth={false}
              multiline
              maxRows={4}
              style={{ width: "80%" }}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontSize: "180%",
                fontWeight: 700,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                p: 1,
                pl: 0,
              }}
            >
              Introduce your project!
            </Typography>
            <TextField
              id="content"
              placeholder="type your project introduction"
              fullWidth={false}
              multiline
              rows={8}
              style={{ width: "80%" }}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontSize: "180%",
                fontWeight: 700,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                p: 1,
                pl: 0,
              }}
            >
              Additional link to the project (optional)
            </Typography>
            <TextField
              id="link"
              placeholder="github link etc."
              fullWidth={false}
              multiline
              rows={1}
              style={{ width: "80%" }}
              onChange={(event) => {
                setLink(event.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ width: "80%" }}
              disabled={title === "" || content === ""}
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              submit
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
