import React from "react";
import { Button, Box } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function PostPage() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const tags = [
    "Arts",
    "Biology",
    "Environmental Science",
    "History",
    "Language",
    "Literature",
    "Health and Medicine",
    "Nature",
    "Physics",
    "Chemistry",
    "Social Science",
    "Astronomy",
    "Education",
    "Mathematics",
    "Cultural Studies",
    "Geology",
    "Psychology",
    "Anthropology",
    "Political Science",
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Materials Science",
    "Data",
  ];
  const postTag = [];
  const handleSubmit = async (event) => {
    console.log(title);
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
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
                p: 1,
                pl: 0,
              }}
            >
              Give your project a fancy name!
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              placeholder="type your project title"
              fullWidth={false}
              name="title"
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
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
                p: 1,
                pl: 0,
              }}
            >
              Introduce your project!
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              name="content"
              placeholder="type your project introduction"
              fullWidth={false}
              multiline
              rows={8}
              style={{ width: "80%" }}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
            {/* <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontSize: "180%",
                fontWeight: 700,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
                p: 1,
                pl: 0,
              }}
            >
              Check the related filed of the project!
            </Typography>
            <div style={{ width: "80%" }}>
              {tags.map((tag) => (
                <FormControlLabel control={<Checkbox />} label={tag} id={tag} />
              ))}
            </div> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ width: "80%" }}
              disabled={title === "" || content === ""}
            >
              submit
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
