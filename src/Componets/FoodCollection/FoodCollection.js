import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import {TabContext,TabList} from'@mui/lab';
import FastFood from '../FastFood/FastFood';
import Dessert from '../Dessert/Dessert';

export default function FoodCollection()  {
        const [value, setValue] = useState('1');
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        }

    return (
        <div className='container mt-5'>
             <Box sx={{ width: '100%', typography: 'body1' }}>
                 <h1 >Our Regular Food Collection</h1>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="FastFood" value="1" />
            <Tab label="Dessert" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"> <FastFood></FastFood> </TabPanel>
        <TabPanel value="2"> <Dessert></Dessert> </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
        </div>
    );
};

