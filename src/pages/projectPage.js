import ProjectHead from "../components/projectHead";
import ProjectTab from "../components/projectTab";
import Box from '@mui/material/Box';

export default function ProjectPage() {
    return (
        <div style={{ margin: 0 }}>
            <ProjectHead title="A Marketplace for Open Science Projects" />
            <ProjectTab />
        </div>
    );
}