
import './App.css';
// import { Box, Center, Flex, Square, Text } from '@chakra-ui/react'
import {RouterProvider } from "react-router-dom"
import router, {routers} from './Routes/Routes';
function App() {
  return (
    <RouterProvider router={routers}/>
  );
}

export default App;
