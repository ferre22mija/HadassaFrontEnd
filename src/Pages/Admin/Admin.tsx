import { Outlet } from "react-router-dom"
import Menuleft from "../../Components/MenuLeft/Menuleft"
import { Box, Flex } from "@chakra-ui/react"
import MenuTop from "../../Components/MenuTop/MenuTop"


function Admin() {
  return (
    <>



      <Flex>
        <Menuleft />
        <Flex direction="column" w="100%">
        <MenuTop />
        <Outlet />
        </Flex>
        


      </Flex>

    </>

  )
}
export default Admin