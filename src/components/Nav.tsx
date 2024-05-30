import { useEffect, useState, useMemo } from 'react';
import { Box, Flex, Link, Text, IconButton, Stack, useDisclosure } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Nav = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sections = useMemo(() => ['home', 'about', 'skills', 'experience', 'contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70; // Adjust based on your nav height

      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        return el && scrollPosition >= el.offsetTop && scrollPosition <= el.offsetTop + el.offsetHeight;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]);

  const handleClick = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggle = () => {
    isOpen ? onClose() : onOpen();
  };

  const socialIconButtonProps = {
    mx: 2,
    color: "white",
    bg: "transparent",
    _hover: { bg: 'transparent', color: 'gray.400' },
    isExternal: true
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      width="100%"
      bg="gray.900"
      p={4}
      zIndex="docked"
      transition="background-color 0.3s ease"
    >
      <Flex justify="space-between" align="center">
        <Link onClick={() => handleClick('home')} _hover={{ textDecoration: 'none' }}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="yellow.400"
            fontFamily="Courier New, monospace"
            mb={0}
          >
            Jorge Jacome
          </Text>
        </Link>
        <Flex display={{ base: 'none', md: 'flex' }} flex="1" justify="center" align="center">
          {sections.map((section) => (
            <Link
              key={section}
              px={5}
              py={2}
              rounded="md"
              onClick={() => handleClick(section)}
              color={activeSection === section ? '#66d9ed' : 'white'}
              _hover={{ textDecoration: 'none', color: activeSection === section ? '#66d9ed' : '#2b5b63' }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} align="center">
          <IconButton
            as={Link}
            href="https://www.linkedin.com/in/jorge-jacome"
            aria-label="LinkedIn"
            icon={<FaLinkedin size="24px" />}
            {...socialIconButtonProps}
          />
          <IconButton
            as={Link}
            href="https://github.com/jorgejac1"
            aria-label="GitHub"
            icon={<FaGithub size="24px" />}
            {...socialIconButtonProps}
          />
        </Flex>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={handleToggle}
          color="white"
        />
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {sections.map((section) => (
              <Link
                key={section}
                onClick={() => {
                  handleClick(section);
                  onClose();
                }}
                color={activeSection === section ? '#66d9ed' : 'white'}
                _hover={{ textDecoration: 'none', color: activeSection === section ? '#66d9ed' : '#2b5b63' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <Flex justify="center">
              <IconButton
                as={Link}
                href="https://www.linkedin.com/in/jorge-jacome"
                aria-label="LinkedIn"
                icon={<FaLinkedin size="24px" />}
                {...socialIconButtonProps}
              />
              <IconButton
                as={Link}
                href="https://github.com/jorgejac1"
                aria-label="GitHub"
                icon={<FaGithub size="24px" />}
                {...socialIconButtonProps}
              />
            </Flex>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Nav;
