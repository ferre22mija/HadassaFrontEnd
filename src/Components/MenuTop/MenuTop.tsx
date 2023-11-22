import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Image, useColorMode } from "@chakra-ui/react"
import logo from "../../assets/LogoSistema.png";
function MenuTop() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box p="2" >
        <Flex>
        <Image boxSize="200px"  src={logo}/>
        <Button onClick={toggleColorMode} >
            {colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
        </Button>
        </Flex>
        
    </Box>
  )
}
export default MenuTop