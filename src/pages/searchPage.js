import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CustomizedInputBase from "../components/searchBar";
import ActionAreaCard from "../components/projectCard";
import { useBar } from "../hooks/hooks";

export default function SearchPage() {
  const { projects } = useBar();

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
        sx={{ width: "100vw", height: "40vh", backgroundColor: "yellow" }}
      ></Box>
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
