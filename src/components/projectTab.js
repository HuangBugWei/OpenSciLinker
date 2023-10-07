import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

export default function ProjectTab() {
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
            
          </TabPanel>
          <TabPanel value="2">
            <iframe src="https://youtu.be/EdPTF4ohzkM">
                {/* Watch this video on YouTube! */}
            </iframe>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        </Box>
      </Box>
    );
  }
