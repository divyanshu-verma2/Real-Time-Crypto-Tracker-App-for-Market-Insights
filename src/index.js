import React from 'react';
import ReactDOM from 'react-dom/client';
import  { StrictMode } from 'react';
import {  ColorModeScript } from "@chakra-ui/react";



import App from './App';
import { ChakraProvider} from "@chakra-ui/react";
import ColorModeSwitcher from './ColorModeSwitcher';
import { theme } from '@chakra-ui/react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
); 
export const server ="https://api.coingecko.com/api/v3"

