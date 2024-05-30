import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Tag,
  TagLabel,
  ScaleFade,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/experiencesData';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="experience"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      ref={ref}
      px={4}
      textAlign="left"
      bg="black"
      color="white"
      py={10}
      width="100%"
      fontFamily="'Roboto', sans-serif"
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
        {experiences.map((exp, index) => (
          <ScaleFade key={index} in={inView} initialScale={0.9}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={6}
              bg="gray.800"
              color="white"
              height="100%"
            >
              <VStack align="left" spacing={4}>
                <Text fontSize="sm" fontWeight="bold" color="yellow.400" mb={0}>
                  {exp.date}
                </Text>
                <Flex direction="row" align="baseline" wrap="wrap">
                  <Text fontSize="lg" fontWeight="bold" mr={2} mb={0}>
                    {exp.title}
                  </Text>
                  <Text fontSize="md" color="gray.400" mr={2} mb={0}>
                    {exp.company}
                  </Text>
                  <Text fontSize="md" color="gray.400" mb={0}>
                    {exp.location}
                  </Text>
                </Flex>
                <Text fontSize="md" textAlign="justify" mb={0}>
                  {exp.details}
                </Text>
                <Flex wrap="wrap">
                  {exp.skills.map((skill, skillIndex) => (
                    <Tag
                      size="lg"
                      key={skillIndex}
                      borderRadius="full"
                      variant="solid"
                      colorScheme="yellow"
                      mr={2}
                      mb={2}
                    >
                      <TagLabel>{skill}</TagLabel>
                    </Tag>
                  ))}
                </Flex>
              </VStack>
            </Box>
          </ScaleFade>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
