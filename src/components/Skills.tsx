import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  ScaleFade,
  VStack,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { FaStar } from 'react-icons/fa';
import { skillCategories } from '../data/skillsData';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const renderStars = (rating: number, isHovered: boolean) => (
    <Flex ml={4}>
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          color={i < rating ? (isHovered ? 'yellow' : 'white') : 'gray'}
        />
      ))}
    </Flex>
  );

  const renderSkills = (skills: { name: string; rating: number }[]) => (
    <SimpleGrid columns={1} spacing={2} width="100%">
      {skills.map((skill) => (
        <ScaleFade in={inView} initialScale={0.9} key={skill.name}>
          <Flex
            align="center"
            mb={2}
            _hover={{
              '.skill-name': { fontWeight: 'bold', color: 'yellow.400' },
              '.stars': { color: 'yellow' },
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Text mb={0} width="70%" className="skill-name">
              {skill.name}
            </Text>
            <Flex className="stars">
              {renderStars(skill.rating, hoveredSkill === skill.name)}
            </Flex>
          </Flex>
        </ScaleFade>
      ))}
    </SimpleGrid>
  );

  const renderSubcategories = (subcategories: any) => (
    <Tabs variant="soft-rounded" colorScheme="purple" width="100%">
      <TabList justifyContent="center" mb={4}>
        {subcategories.map((subcat: any, subIndex: number) => (
          <Tab key={subIndex} color="teal.500">
            {subcat.subcategory}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {subcategories.map((subcat: any, subIndex: number) => (
          <TabPanel key={subIndex} width="100%">
            <VStack spacing={4} align="left" width="100%">
              {renderSkills(subcat.skills)}
            </VStack>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );

  const renderCategoryContent = (category: any) => {
    if (category.subcategories) {
      return renderSubcategories(category.subcategories);
    }
    if (category.skills.length === 1) {
      return (
        <Flex justify="center" align="center" width="100%">
          {renderSkills(category.skills)}
        </Flex>
      );
    }
    return renderSkills(category.skills);
  };

  return (
    <Box
      id="skills"
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
      pt={40} // Added padding to the top
    >
      <Tabs variant="soft-rounded" colorScheme="yellow" width="100%">
        <TabList justifyContent="center" mb={4}>
          {skillCategories.map((category, index) => (
            <Tab key={index}>{category.category}</Tab>
          ))}
        </TabList>
        <TabPanels height="640px">
          {skillCategories.map((category, index) => (
            <TabPanel key={index} width="100%">
              <ScaleFade in={inView} initialScale={0.9}>
                <Flex justify="center" alignItems="center" width="100%">
                  <Box ml={{ base: 0, md: 'auto' }} mr={{ base: 0, md: 'auto' }} maxWidth="1200px">
                    {renderCategoryContent(category)}
                  </Box>
                </Flex>
              </ScaleFade>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Skills;
