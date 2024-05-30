import { Box, Heading, Text, ScaleFade } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import ScrollDown from './ScrollDown';
import Image from 'next/image';

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentText, setCurrentText] = useState(0);
  const texts = [
    { text: "I am a Senior Software Engineer", color: "teal.300" },
    { text: "I am a UI Engineer", color: "orange.300" },
    { text: "I am a Lead Developer", color: "pink.300" },
    { text: "I am a Leader", color: "yellow.300" },
    { text: "I am a Mexican", color: "purple.300" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <ScaleFade in={inView} initialScale={0.9}>
      <Box
        id="home"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        ref={ref}
        px={4}
        textAlign="center"
        color="white"
        background="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/homebg.jpeg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box borderRadius="full" overflow="hidden" boxSize="350px" mb={4}>
          <Image
            src="/assets/mehome.jpg"
            alt="Jorge Jacome"
            width={350}
            height={350}
          />
        </Box>
        <Heading fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
          Welcome to My Creative Space
        </Heading>
        <Text fontSize={{ base: 'lg', md: '2xl' }} mb={6} color={texts[currentText].color}>
          {texts[currentText].text}
        </Text>
        <ScrollDown />
      </Box>
    </ScaleFade>
  );
};

export default Home;
