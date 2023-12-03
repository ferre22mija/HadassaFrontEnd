import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Menu from "../../../Models/Menu";
import Item from "./Item";

const SubItem = ({
  id,
  orderMenu,
}: {
  id: number;
  orderMenu: Map<number, Menu>;
}) => {
  const menuFound = orderMenu.get(id);
  if (menuFound === undefined) return <></>;
  if (menuFound.hijos.length > 0)
    return <Item id={menuFound.id} orderMenu={orderMenu} />;
  return (
    <Box role="group" cursor="pointer" my="4px">
      <Flex alignContent="center">
        <Center padding="0">
          <Box
            w="10px"
            h="1px"
            mt="3px"
            mx="2px"
            bg="white"
            transition="0.5s"
            _groupHover={{ width: "20px", bg: "#f8b940" }}
          ></Box>
          <Text
            fontSize="sm"
            transition="color 0.5s"
            _groupHover={{ color: "#f8b940" }}
          >
            {menuFound.nombre}
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};
export default SubItem;
