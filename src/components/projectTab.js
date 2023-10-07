import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Typography from '@mui/material/Typography';

export default function ProjectTab(props) {
    const { abstract } = props;
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <Box sx={{ width: '100%', display: 'flex',
    flexDirection: 'row', justifyContent: 'center', 
    // backgroundColor: 'green',
    }}>
      <Box sx={{ width: '80%', typography: 'body1', 
    //   backgroundColor: 'orange',
      }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider',}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Details" value="1" />
              <Tab label="Resources" value="2" />
              <Tab label="Chat" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box sx={{ width: '70%'}}>
            <Typography
                variant="h1"
                sx={{
                    color: 'black', 
                    fontSize: '300%',
                    fontFamily: 'sans-serif',
                    fontWeight: 800,
                    pt: '2vw',
                    pb: '2vw'
                }}
            >abstract
            </Typography>
            <Typography
                variant="p"
                sx={{
                    color: 'black', 
                    fontSize: '125%',
                    fontFamily: 'sans-serif',
                    fontWeight: 400,
                    pt: '2vw',
                    pb: '2vw'
                }}
            >{abstract}
            </Typography>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <iframe src="https://youtu.be/EdPTF4ohzkM">
                Watch this video on YouTube!
            </iframe>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        </Box>
      </Box>
    );
  }
