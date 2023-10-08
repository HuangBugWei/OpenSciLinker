import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CustomizedInputBase from "../components/searchBar";
import ActionAreaCard from "../components/projectCard";
import { useBar } from "../hooks/hooks";

export default function SearchPage() {
  const { projects, setProjects } = useBar();

  function generateRandomImageUrl() {
    const baseUrl = "https://source.unsplash.com/random?wallpapers";
    return `${baseUrl}&${Math.random()}`;
  }
  //   const items = [
  //     "A Marketplace for Open Science Projects",
  //     "Artemis II and You!",
  //     "Be a Space Geologist",
  //   ];

  //   const contents = [
  //     "There are many different open science and open-source projects and tools, but no efficient way to match project creators with interested collaborators who possess the skills required to contribute. Your challenge is to create a solution that will help people who are looking for open-source projects to work on and project creators who need skilled contributors to find each other and communicate.There are many different open science and open-source projects and tools, but no efficient way to match project creators with interested collaborat collaborat collaborat collaborat collaborat collaborat",
  //     "NASA’s Artemis II mission will bring a lot of firsts to the world–it will be the first mission to send a woman, a person of color, and a Canadian to lunar space. Your challenge is to create a short video to share how the development of the Artemis II mission is impacting you and your community, wherever you may be.",
  //     "Picture a geologist. Do you imagine someone who spends their days in remote field areas looking at rocks? Our planet and its geology can also be studied from space using only a computer and NASA data. Your challenge is to create an app that enables geologists to use NASA’s Earth observation data to conduct research. Use your imagination to show us that geology doesn’t always require field work to rock!",
  //   ];

  //   let stackItems = items.map((item, idx) => (
  //     <ActionAreaCard
  //       title={item}
  //       contents={contents[idx]}
  //       imgurl={generateRandomImageUrl()}
  //       similarity={1}
  //     />
  //   ));

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
                  contents={project.author_email}
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
