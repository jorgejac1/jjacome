import dynamic from 'next/dynamic';
import { Box, Spinner } from '@chakra-ui/react';
import Head from 'next/head';

const Home = dynamic(() => import('../components/Home'), { ssr: false, loading: () => <Spinner /> });
const About = dynamic(() => import('../components/About'), { ssr: false, loading: () => <Spinner /> });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false, loading: () => <Spinner /> });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false, loading: () => <Spinner /> });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false, loading: () => <Spinner /> });

export default function Index() {
  return (
    <>
      <Head>
        <title>Jorge Jacome - Portfolio</title>
        <meta name="description" content="Portfolio of Jorge Jacome, a Senior Front End Engineer" />
        <meta name="keywords" content="Jorge Jacome, Portfolio, Front End Engineer, ReactJS, JavaScript" />
        <meta name="author" content="Jorge Jacome" />
        <meta property="og:title" content="Jorge Jacome - Portfolio" />
        <meta property="og:description" content="Portfolio of Jorge Jacome, a Senior Front End Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jjacome.com" />
        <meta property="og:image" content="https://jjacome.com/og-image.jpg" />
      </Head>
      <Box as="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </Box>
    </>
  );
}
