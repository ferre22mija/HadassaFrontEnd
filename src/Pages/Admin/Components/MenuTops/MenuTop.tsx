import { MoonIcon, HamburgerIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../../../../assets/Logo.png";
import { Dispatch, SetStateAction } from "react";

interface props {
  SetToggleMenuLeft: Dispatch<SetStateAction<boolean>>;
  toggleMenuleft: boolean;
}
function MenuTop({ SetToggleMenuLeft, toggleMenuleft }: props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorBorder = useColorModeValue("#E2E8F0", "black");
  const styleBorder = "2px solid" + colorBorder;
  function ChangeToggleMenuLeft(){
    if(toggleMenuleft) SetToggleMenuLeft(false);
    if(!toggleMenuleft) SetToggleMenuLeft(true);
  } 
  return (
    <Flex p="2">
      <IconButton
        aria-label="Search database"
        icon={<HamburgerIcon />}
        onClick={ChangeToggleMenuLeft}
        display={{base:"block",md:"none"}}
      />
      <Flex p="2">
        <Image boxSize="40px" src={logo} />
        <Text my="auto" mx="2">
          HADASSA
        </Text>
      </Flex>
      <Spacer />
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Button>Usuario</Button>
    </Flex>
  );
}
export default MenuTop;
