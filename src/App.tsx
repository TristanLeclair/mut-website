import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { muiTheme } from '@styles/stylesheet';
import { CssBaseline } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import paths from '@utils/paths';

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Routes>
      <Route path={paths.home.url} element={<HomePage />} />
      <Route path={paths.staff.url} element={<HomePage />} />
      <Route path={paths.contact.url} element={<HomePage />} />
      <Route path="*" element={<Navigate to={paths.home.url} />} />
    </Routes>
  </ThemeProvider>
);

export default App;
