import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"
import logo from "../../assets/Logo.png";
import MENU from "../../Data/Menu";
// import { useState } from "react";
interface Menu {
  id:number,
  nombre:string,
  padreId:number,
  ruta:string,
  hijos?:Array<any>
}
function Menuleft() {
  const colorBorder = useColorModeValue("#E2E8F0", "black");
  const styleBorder = "2px solid" + colorBorder;
  // const initialMenu = MENU;
  // const [orderMenu,SetOrderMenu] = useState([]);
  function convertMenuChilds(){
    let newMenu:Array<Menu> = [];
    let i = 0
    while (MENU.length > 0) {
      let valor:any = MENU[i];
      if(valor.padreId === null) {
        newMenu.push(valor)
        MENU.splice(i,1);
        i=0;
      }else{
        const found = newMenu.find((element)=>element.id === valor.padreId)
        if(found === undefined) {
          i++
        }else{
          found.hijos?.push(valor)
          
          MENU.splice(i,1)
          console.log("hijo encontrado",[found,MENU])
          i=0;
        }
      }
      
    }
    console.log(newMenu)
  }
  return (
    <Box w="300px" h="100vh">
      <Flex p="2" borderBottom={styleBorder} h="8vh">
        <Image boxSize="40px" src={logo} />
        <Text my="auto" mx="2">HADASSA</Text>
      </Flex>
      <Box h="92vh" bg="#222b40" >
        <Accordion allowToggle color="white">
          <Button onClick={convertMenuChilds}>hagame</Button>
          <Item />
        </Accordion>
      </Box>


    </Box>
  )
}
export default Menuleft

const Item = () => {
  return (
    <>
      <AccordionItem border="0px">
        <h2>
          <AccordionButton _expanded={{ color: "#f8b940" }}>
            <Box as="span" flex='1' textAlign='left'>
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <SubItem />
          <SubItem />
          <SubItem />
          <SubItem />
          <SubItem />
          <SubItem />
        </AccordionPanel>
      </AccordionItem>
    </>
  )
}
const SubItem = () => {
  return (
    <Box role="group" cursor="pointer" my="4px">
      <Flex alignContent="center">
        <Center padding="0">
          <Box w="10px" h="1px" mt="3px" mx="2px" bg="white"
            transition="0.5s" _groupHover={{ width: "20px", bg: "#f8b940" }}></Box>
          <Text fontSize='sm' transition="color 0.5s" _groupHover={{ color: "#f8b940" }}>subItem</Text>
        </Center>

      </Flex>
    </Box>
  )
}