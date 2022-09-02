import * as React from 'react';

import NavBar from '@organisms/NavBar/NavBar';

interface LayoutProps {
  header: string;
}

const Layout = ({ header }: LayoutProps) => <NavBar />;

export default Layout;
