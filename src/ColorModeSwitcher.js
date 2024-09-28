import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { extendTheme } from '@chakra-ui/react';

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const switchColor = useColorModeValue('customColor.light', 'customColor.dark');

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos="fixed"
      top="4"
      right="4"
      zIndex="overlay"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      bg={switchColor}
      {...props}
    />
  );
};

const customTheme = extendTheme({
  colors: {
    customColor: {
      light: '#ffcc00', // Specify your custom light color
      dark: '#0033cc', // Specify your custom dark color
    },
  },
});

export { customTheme };
export default ColorModeSwitcher;









