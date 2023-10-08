import ProjectHead from "../components/projectHead";
import ProjectTab from "../components/projectTab";

export default function ProjectPage() {
  return (
    <div>
      <ProjectHead title="A Marketplace for Open Science Projects" />
      <ProjectTab
        abstract="NASA is making a long-term commitment to build an inclusive open science community over the next decade. Open-source science is a commitment to openly sharing software, data, and knowledge (algorithms, papers, documents, ancillary information) as early as possible in the scientific process. It is also an opportunity to involve a wider range of people in research, including those from outside academia.

Open research initiatives can involve a variety of participants. Some open research projects involve participants who don’t possess specialized expertise, but other projects require contributors with specific skills. While it’s challenging for those who run open science projects to find people to participate, it’s also challenging for people who want to participate to find those projects. There are well-known, large, open-source software projects (e.g., Python, Linux) and well-known places to find open data (especially from NASA!), but currently, there is no place online for project creators and skilled participants to find each other, mingle, and foster professional relationships to work on interesting open research projects."
      />
    </div>
  );
}
