// components/BackToTop.tsx
import { IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const BackToTop = ({
  threshold = 200,
  icon = <ChevronUpIcon />,
  colorScheme = "teal",
  size = "lg",
  position = { bottom: "2rem", right: "2rem" },
  zIndex = "popover"
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <IconButton
      icon={icon}
      isRound
      size={size}
      colorScheme={colorScheme}
      onClick={scrollToTop}
      display={show ? "flex" : "none"}
      position="fixed"
      bottom={position.bottom}
      right={position.right}
      zIndex={zIndex}
      aria-label="Back to top"
    />
  );
};

export default BackToTop;
