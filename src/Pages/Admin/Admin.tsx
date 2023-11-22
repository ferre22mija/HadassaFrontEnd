import { Outlet } from "react-router-dom"
import Menuleft from "../../Components/MenuLeft/Menuleft"
import { Box, Flex } from "@chakra-ui/react"
import MenuTop from "../../Components/MenuTop/MenuTop"


function Admin() {
  return (
    <>

      <MenuTop />

      <Flex>
        <Menuleft />
        <Box w="85%" >
        <Outlet />
        </Box>
        
      </Flex>

    </>

  )
}
export default Admin