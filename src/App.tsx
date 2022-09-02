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
      <Route path={paths.home} element={<HomePage />} />
      <Route path="*" element={<Navigate to={paths.home} />} />
    </Routes>
  </ThemeProvider>
);

export default App;
