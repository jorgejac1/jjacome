import { extendTheme, ThemeConfig, ThemeComponents } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

// Theme configuration
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// Custom theme
const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        scrollBehavior: 'smooth',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  },
  colors: {
    brand: {
      50: '#e3f9f7',
      100: '#c8f0ec',
      200: '#a8e7e1',
      300: '#87ddd5',
      400: '#66d3ca',
      500: '#4cbab0',
      600: '#3a9387',
      700: '#286c5f',
      800: '#144536',
      900: '#001d0d',
    },
  },
  fonts: {
    heading: 'Georgia, serif',
    body: 'system-ui, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
});

export default theme;
