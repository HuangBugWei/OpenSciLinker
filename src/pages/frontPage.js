import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ForceGraph from "react-force-graph-3d";
import { useWindowSize } from "@react-hook/window-size";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { post, get } from "../axios";
import { useBar } from "../hooks/hooks";
import SendIcon from "@mui/icons-material/Send";
import knowledge_graph from "./knowledge_graph.json";
// import knowledge_graph_merged from "../../data/knowledge_graph_merged.json";
// --------------------------------------------------------------------------------

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// --------------------------------------------------------------------------------
// The region I modified
// const N = 300;
// const myData = {
//   nodes: [...Array(N).keys()].map((i) => ({ id: i })),
//   links: [...Array(N).keys()]
//     .filter((id) => id)
//     .map((id) => ({
//       source: id,
//       target: Math.round(Math.random() * (id - 1)),
//     })),
// };

const myData = {
  nodes: knowledge_graph.nodes,
  links: knowledge_graph.links,
};
// --------------------------------------------------------------------------------

export default function FrontPage() {
  const { auth } = useBar();

  const [width, height] = useWindowSize();
  const [buttonText, setButtonText] = React.useState(
    "Grab the Open Science Project!"
  );
  const navigate = useNavigate();
  console.log(width);
  console.log(height);

  // --------------------------------------------------------------------------------
  // The region I modified
  const { useMemo, useState, useRef, useCallback } = React;
  const FocusGraph = () => {
    // --------------------------------------------------
    // The camera focus region
    const fgRef = useRef();

    const handleClick = useCallback(
      (node) => {
        // Aim at node from outside it
        const distance = 40;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        fgRef.current.cameraPosition(
          {
            x: node.x * distRatio,
            y: node.y * distRatio,
            z: node.z * distRatio,
          }, // new position
          node, // lookAt ({ x, y, z })
          3000 // ms transition duration
        );
      },
      [fgRef]
    );
    // --------------------------------------------------

    // // --------------------------------------------------
    // // The hover region
    // const NODE_R = 8;

    // const [highlightNodes, setHighlightNodes] = useState(new Set());
    // const [highlightLinks, setHighlightLinks] = useState(new Set());
    // const [hoverNode, setHoverNode] = useState(null);

    // const updateHighlight = () => {
    //   setHighlightNodes(highlightNodes);
    //   setHighlightLinks(highlightLinks);
    // };

    // const handleNodeHover = node => {
    //   highlightNodes.clear();
    //   highlightLinks.clear();
    //   if (node) {
    //     highlightNodes.add(node);
    //     // node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
    //     // node.links.forEach(link => highlightLinks.add(link));
    //   }

    //   setHoverNode(node || null);
    //   updateHighlight();
    // };

    // const paintRing = useCallback((node, ctx) => {
    //   // add ring just for highlighted nodes
    //   ctx.beginPath();
    //   ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
    //   ctx.fillStyle = node === hoverNode ? 'red' : 'orange';
    //   ctx.fill();
    // }, [hoverNode]);
    // // --------------------------------------------------

    const colormap = {
      A: "Tomato",
      B: "DodgerBlue",
      C: "LightGreen",
    };

    return (
      <ForceGraph
        ref={fgRef}
        graphData={myData}
        width={width * 0.5}
        height={height * 0.8}
        linkWidth={0.2}
        backgroundColor="white"
        showNavInfo={false}
        nodeLabel={(node) => `<span style="color: purple">${node.name}</span>`}
        // nodeAutoColorBy={node => node.tag}
        nodeColor={(node) => colormap[node.tag]}
        onNodeClick={handleClick}
        cooldownTicks={100}
        onEngineStop={() => fgRef.current.zoomToFit(0, 120)}
      />
    );
  };
  // --------------------------------------------------------------------------------

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: 'blue',
            flexGrow: 1, // auto fill the remain
          }}
        >
          <Box
            // component="leftinfo"
            sx={{
              flex: 3,
              display: "flex",
              flexDirection: "column",
              // backgroundColor: 'orange',
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 3,
                width: "90%",
                display: "flex",
                flexDirection: "column",
                // backgroundColor: 'black',
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // backgroundColor: 'yellow',
                  flexGrow: 1,
                }}
              ></Box>
              <Typography
                variant="h1"
                sx={{
                  color: "black",
                  fontSize: "500%",
                  fontFamily: "sans-serif",
                  fontWeight: 900,
                }}
              >
                OpenSciLinker
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 2,
                width: "90%",
                display: "flex",
                flexDirection: "column",
                // backgroundColor: 'white',
              }}
            >
              <Stack spacing={2} direction="column">
                <Typography variant="h5" component="h2" gutterBottom>
                  {"What's New in Open Science."}
                </Typography>
                <Stack
                  spacing="2"
                  direction="row"
                  display="flex"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    onClick={() => navigate("/signin")}
                    size="large"
                  >
                    Log in
                  </Button>
                  <Typography
                    variant="button"
                    sx={{
                      textAlign: "center",
                      pl: 2,
                      pr: 2,
                    }}
                  >
                    or
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/search")}
                    onMouseEnter={() =>
                      setButtonText("Graph the Open Science Project!")
                    }
                    onMouseLeave={() =>
                      setButtonText("Grab the Open Science Project!")
                    }
                    endIcon={<SendIcon />}
                    size="large"
                  >
                    {buttonText}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 4,
              display: "flex",
              flexDirection: "column",
              // backgroundColor: 'green',
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <div>
              <FocusGraph />
            </div>
          </Box>
        </Box>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
