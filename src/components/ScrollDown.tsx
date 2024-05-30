import { IconButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const ScrollDown = () => {
  const [show, setShow] = useState(true);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY <= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <IconButton
      icon={<ChevronDownIcon />}
      isRound
      size="lg"
      colorScheme="teal"
      onClick={scrollToAbout}
      display={show ? 'flex' : 'none'}
      position="absolute"
      bottom={{ base: '4rem', md: '6rem' }}
      left="50%"
      transform="translateX(-50%)"
      zIndex="popover"
      aria-label="Scroll down"
    />
  );
};

export default ScrollDown;
