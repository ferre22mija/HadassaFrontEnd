import { Outlet } from "react-router-dom";
import Menuleft from "./Components/MenuLeft/Menuleft";
import { Box, Button, Flex } from "@chakra-ui/react";
import MenuTop from "./Components/MenuTops/MenuTop";
import { useState } from "react";

function Admin() {
  const [toggleMenuleft, SetToggleMenuLeft] = useState(false);

  return (
    <>
      <Box w="100vw" h="65px">
        <MenuTop toggleMenuleft={toggleMenuleft} SetToggleMenuLeft={SetToggleMenuLeft}/>
      </Box>
      <Flex>
        <Box
            w="200px"
            h="calc(100vh - 65px)"
            bg="#222b40"
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
            }}
            display={toggleMenuleft ? "block":"none"}
          >
            <Menuleft />
        </Box>
        
          <Box
            w="200px"
            h="calc(100vh - 65px)"
            bg="#222b40"
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
            }}
            display={{ base: "none", md: "block" }}
          >
            <Menuleft />
          </Box>
        

        <Box
          w={{ base: "100%", md: "calc(100% - 200px)" }}
          p="4"
          h="calc(100vh - 65px)"
          overflowY="auto"
        >
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}
export default Admin;
