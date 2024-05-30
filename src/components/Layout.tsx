// components/Layout.tsx
import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Nav from './Nav';
import BackToTop from './BackToTop';  // Import the BackToTop component

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Nav />
      <Box as="main">
        {children}
      </Box>
      <BackToTop />
    </Box>
  );
}

export default Layout;
