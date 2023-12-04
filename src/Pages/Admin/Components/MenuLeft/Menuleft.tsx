import { Accordion, Box, Button } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import Menu from "../../Models/Menu";
import { Item } from "./Components";
import { GetMenus } from "../../Services";
import { createAddaptedMenu } from "../../Addapters";

function Menuleft() {
  // const initialMenu = MENU;
  const [orderMenu, SetOrderMenu] = useState(new Map());
  useEffect(() => {
    const listaMenu = GetMenus();
    let newItems = new Map<number, Menu>();
    listaMenu.forEach((item: any) => {
      const menuItemAdapter: Menu = createAddaptedMenu(item);
      newItems.set(menuItemAdapter.id, menuItemAdapter);
    });
    newItems.forEach((ele: any) => {
      if (ele.padreId !== null) {
        newItems.get(ele.padreId)?.hijos.push(ele.id);
      }
    });
    SetOrderMenu(newItems);
  }, []);
  return (
    <>
      <Box>
        <Accordion allowMultiple color="white">
          {Array.from(orderMenu.keys()).map((key: number) => {
            let menuSelec: Menu = orderMenu.get(key);
            if (menuSelec.padreId == null) {
              return <Item key={key} id={key} orderMenu={orderMenu} />;
            }
          })}
        </Accordion>
      </Box>
    </>
  );
}
export default Menuleft;
