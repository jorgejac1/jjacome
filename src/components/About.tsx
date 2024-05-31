import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="about"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      ref={ref}
      px={4}
      textAlign="left"
      bg="black"
      color="white"
      py={10}
    >
      <Flex direction={{ base: 'column', md: 'row' }} align="center" maxW="1200px" width="100%" mx="auto" p={4} borderRadius="md" boxShadow="lg">
        <Box borderRadius="full" overflow="hidden" boxSize={{ base: '300px', md: '500px' }} mb={{ base: 4, md: 0 }} mr={{ md: 8 }}>
          <Image
            src="/assets/aboutme.jpg" // Update with your image path
            alt="Jorge Jacome"
            boxSize={{ base: '300px', md: '500px' }}
            objectFit="cover"
          />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="center" pt={{ base: 0, md: 8 }}>
          <Box bg="white" px={3} py={1} borderRadius="md" display="flex" alignItems="center" mb={10} width="fit-content">
            <Heading as="h3" size="md" color="black" m={0}>
              About Me
            </Heading>
          </Box>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={20} pl={{ base: 0, md: '0px', sm:'10px'}}>
            Hi, my name is Jorge Jacome. Im a Senior Front End Developer from Mexico.
            Over the years I developed a skill set in a range of technologies like
            <Box as="span" bg="yellow.300" color="black" fontWeight="bold" px={1} mx={1} borderRadius="md">
              JavaScript
            </Box>
            and frameworks
            <Box as="span" bg="yellow.300" color="black" fontWeight="bold" px={1} mx={1} borderRadius="md">
              ReactJS
            </Box>,
            <Box as="span" bg="yellow.300" color="black" fontWeight="bold" px={1} mx={1} borderRadius="md">
              NextJS
            </Box>, 
            <Box as="span" bg="yellow.300" color="black" fontWeight="bold" px={1} mx={1} borderRadius="md">
              TypeScript
            </Box>, 
            <Box as="span" bg="yellow.300" color="black" fontWeight="bold" px={1} mx={1} borderRadius="md">
              Redux
            </Box>, and
            <Box as="span" bg="yellow.300" color="black" fontWeight="bold" px={1} mx={1} borderRadius="md">
              NodeJS
            </Box>.
            I really value clean and readable code.
            Im also very passionate about UX / UI.
            I enjoy cooking and spending time with my lovely wife in the city or exploring nature with our little dog.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
