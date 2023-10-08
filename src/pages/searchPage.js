import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CustomizedInputBase from "../components/searchBar";
import ActionAreaCard from "../components/projectCard";
import Typography from "@mui/material/Typography";
import { useBar } from "../hooks/hooks";

export default function SearchPage() {
  const { projects } = useBar();
  const [buttonText, setButtonText] = useState(
    "Grab the Open Science Project!"
  );
  function generateRandomImageUrl() {
    const baseUrl = "https://source.unsplash.com/random?wallpapers";
    return `${baseUrl}&${Math.random()}`;
  }

  useEffect(() => {
    console.log("in searchpages.js");
    console.log(projects);
  }, [projects]);
  return (
    <Stack spacing={1}>
      <Box
        sx={{
          width: "100vw",
          height: "40vh",
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "bottom",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "black",
            fontSize: "500%",
            fontFamily: "sans-serif",
            fontWeight: 900,
            textAlign: "center",
            p: 5,
          }}
          onMouseEnter={() => setButtonText("Graph the Open Science Project!")}
          onMouseLeave={() => setButtonText("Grab the Open Science Project!")}
        >
          {buttonText}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "80vw" }}>
          <CustomizedInputBase />
          <Stack spacing={2}>
            {projects.length === 0 ? (
              <p>Go Grab Some Cool Open Science Project!</p>
            ) : (
              projects.map((project) => (
                <ActionAreaCard
                  title={project.title}
                  author={project.author_email}
                  contents={project.content}
                  imgurl={generateRandomImageUrl()}
                  similarity={Math.round(project.score * 100)}
                />
              ))
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
