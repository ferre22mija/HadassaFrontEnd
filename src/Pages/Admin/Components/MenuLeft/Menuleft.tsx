import { Accordion, Box, Button } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import MapHijos from "./Utilities/MapHijos";
import Menu from "../../Models/Menu";
import { Item } from "./Components";

function Menuleft() {
  // const initialMenu = MENU;
  const [orderMenu, SetOrderMenu] = useState(new Map());
  useEffect(()=>{
    
  },[])
  return (
    <>
      <Box>
        <Accordion allowMultiple color="white">
          <Button
            onClick={() => {
              SetOrderMenu(MapHijos());
            }}
          >
            hagame
          </Button>
          <Button
            onClick={() => {
              console.log("orderMenu", orderMenu);
            }}
          >
            ver
          </Button>
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
