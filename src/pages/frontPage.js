import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ForceGraph from 'react-force-graph-3d';
import { useWindowSize } from "@react-hook/window-size";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const N = 300;
const myData = {
  nodes: [...Array(N).keys()].map(i => ({ id: i })),
  links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
};


export default function FrontPage() {
  const [width, height] = useWindowSize();
  const navigate = useNavigate();
  console.log(width);
  console.log(height);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            // backgroundColor: 'blue',
            flexGrow: 1 // auto fill the remain
          }}
        >
          <Box
            // component="leftinfo"
            sx={{
              flex: 3,
              display: 'flex',
              flexDirection: 'column',
              // backgroundColor: 'orange',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                flex: 3,
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'black',
                justifyContent: 'flex-start',
              }}
            >
              <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'yellow',
                flexGrow: 1
              }}
            ></Box>
              <Typography variant="h1"
                sx={{
                  color: 'black', 
                  fontSize: '500%',
                  fontFamily: 'sans-serif',
                  fontWeight: 900
                }}
              >What's New</Typography>
              <Typography variant="h1" gutterBottom
                sx={{
                  color: 'black', 
                  fontSize: '400%',
                  fontFamily: 'sans-serif',
                  fontWeight: 700
                }}
              >in Open Science</Typography>
            </Box>
            <Box
              sx={{
                flex: 2,
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                // backgroundColor: 'white',
              }}
            >
              <Stack 
                spacing={2} 
                direction="column"
              >
                <Typography variant="h5" component="h2" gutterBottom>
                {'Pin a footer to the bottom of the viewport.'}
                {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Stack
                  spacing={2}
                  direction={'row'}
                >
                  <Button variant="contained" onClick={() => navigate('/sign')}>Log in</Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 4,
              display: 'flex',
              flexDirection: 'column',
              // backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'start'
            }}
          >
            <div>
              <ForceGraph 
                graphData={myData} 
                width={width*0.5}
                height={height*0.8}
                backgroundColor='white'
                showNavInfo={false}
              />
            </div>
          </Box>
        </Box>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
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