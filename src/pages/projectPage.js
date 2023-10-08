import ProjectHead from "../components/projectHead";
import ProjectTab from "../components/projectTab";
import { useLocation } from "react-router-dom";

export default function ProjectPage() {
  const location = useLocation();
  console.log("wow", location);
  return (
    <div>
      <ProjectHead
        title={location.state.value.title}
        imgurl={location.state.value.imgurl}
      />
      <ProjectTab abstract={location.state.value.contents} />
    </div>
  );
}
