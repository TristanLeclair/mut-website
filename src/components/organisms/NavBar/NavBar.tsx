import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

import paths from '@utils/paths';

const NavBar = () => (
  <Box sx={{ width: '100%' }}>
    <Tabs aria-label="navigation bar" role="navigation">
      <Link to={paths.home}>
        <Tab label={paths.home} />
      </Link>
      <Link to={paths.staff}>
        <Tab label={paths.staff} />
      </Link>
      <Link to={paths.contact}>
        <Tab label={paths.contact} />
      </Link>
    </Tabs>
  </Box>
);

export default NavBar;
