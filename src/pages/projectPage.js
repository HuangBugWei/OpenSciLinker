import ProjectHead from "../components/projectHead";
import ProjectTab from "../components/projectTab";
import ActionAreaCard from "../components/projectCard";
import Stack from "@mui/material/Stack";

export default function ProjectPage() {
  const items = [
    "A Marketplace for Open Science Projects",
    "Artemis II and You!",
    "Be a Space Geologist",
  ];

  const contents = [
    "There are many different open science and open-source projects and tools, but no efficient way to match project creators with interested collaborators who possess the skills required to contribute. Your challenge is to create a solution that will help people who are looking for open-source projects to work on and project creators who need skilled contributors to find each other and communicate.There are many different open science and open-source projects and tools, but no efficient way to match project creators with interested collaborators who possess the skills required to contribute. Your challenge is to create a solution that will help people who are looking for open-source projects to work on and project creators who need skilled contributors to find each other and communicate.",
    "NASA’s Artemis II mission will bring a lot of firsts to the world–it will be the first mission to send a woman, a person of color, and a Canadian to lunar space. Your challenge is to create a short video to share how the development of the Artemis II mission is impacting you and your community, wherever you may be.",
    "Picture a geologist. Do you imagine someone who spends their days in remote field areas looking at rocks? Our planet and its geology can also be studied from space using only a computer and NASA data. Your challenge is to create an app that enables geologists to use NASA’s Earth observation data to conduct research. Use your imagination to show us that geology doesn’t always require field work to rock!",
  ];

  const stackItems = items.map((item, idx) => (
    <ActionAreaCard
      title={item}
      contents={contents[idx]}
      imgurl="https://source.unsplash.com/random?wallpapers"
    />
  ));
  return (
    <div>
      <ProjectHead title="A Marketplace for Open Science Projects" />
      <ProjectTab
        abstract="NASA is making a long-term commitment to build an inclusive open science community over the next decade. Open-source science is a commitment to openly sharing software, data, and knowledge (algorithms, papers, documents, ancillary information) as early as possible in the scientific process. It is also an opportunity to involve a wider range of people in research, including those from outside academia.

Open research initiatives can involve a variety of participants. Some open research projects involve participants who don’t possess specialized expertise, but other projects require contributors with specific skills. While it’s challenging for those who run open science projects to find people to participate, it’s also challenging for people who want to participate to find those projects. There are well-known, large, open-source software projects (e.g., Python, Linux) and well-known places to find open data (especially from NASA!), but currently, there is no place online for project creators and skilled participants to find each other, mingle, and foster professional relationships to work on interesting open research projects."
      />
      <Stack spacing={2}>
        {stackItems}
        <ActionAreaCard imgurl="https://source.unsplash.com/random?wallpapers" />
        <ActionAreaCard imgurl="https://source.unsplash.com/random?wallpapers" />
        <ActionAreaCard imgurl="https://source.unsplash.com/random?wallpapers" />
      </Stack>
    </div>
  );
}
