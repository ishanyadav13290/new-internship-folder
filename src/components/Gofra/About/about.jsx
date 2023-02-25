import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OurStory from './OurStory/OurStory';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%" }}>
        <Tabs value={value} sx={{width:"fit-content", margin:"auto"}} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Our Story" {...a11yProps(0)} />
          <Tab label="FAQ" {...a11yProps(1)} />
          <Tab label="Gofra Awards" {...a11yProps(2)} />
          <Tab label="Become a contributor" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box value={value} index={0}>
        <OurStory />
      </Box>
      <Box value={value} index={1}>
      <OurStory />
      </Box>
      <Box value={value} index={2}>
      <OurStory />
      </Box>
      <Box value={value} index={3}>
      <OurStory />
      </Box>
    </Box>
    <br />
    <br />
    <br />
    <br />
    </>
  );
}