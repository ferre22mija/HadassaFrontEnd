import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";
import Menu from "../../../Models/Menu";
import SubItem from "./SubItem";

const Item = ({
  id,
  orderMenu,
}: {
  id: number;
  orderMenu: Map<number, Menu>;
}) => {
  const menuFound = orderMenu.get(id);
  if (menuFound === undefined) return <></>;
  if (menuFound.hijos.length === 0)
    return (
      <Box
        p={4}
        cursor="pointer"
        transition="color 0.5s"
        _hover={{ color: "#f8b940" }}
      >
        <Text> {menuFound.nombre}</Text>
      </Box>
    );
  return (
    <>
      <AccordionItem border="0px">
        <h2>
          <AccordionButton _expanded={{ color: "#f8b940" }}>
            <Box as="span" flex="1" textAlign="left">
              {menuFound.nombre}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel py={0} pr={0} pl={3}>
          {menuFound.hijos.map((hijoId: number) => {
            return <SubItem key={hijoId} id={hijoId} orderMenu={orderMenu} />;
          })}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default Item