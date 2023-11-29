import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Image, Spacer, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"

function MenuTop() {
  const { colorMode, toggleColorMode } = useColorMode()
  const colorBorder = useColorModeValue("#E2E8F0","black");
  const styleBorder = "2px solid"+ colorBorder;
  return (
    <Box w="100%" >
      <Flex borderBottom={styleBorder}p="2" h="8vh">


        <Spacer />
        <Button onClick={toggleColorMode} >
          {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Button>Usuario</Button>
      </Flex>

    </Box>
  )
}
export default MenuTop