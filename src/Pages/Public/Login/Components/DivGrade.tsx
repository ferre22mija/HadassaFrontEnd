import { Box, useColorModeValue } from "@chakra-ui/react"

function DivGrade() {
    const bgLogin = useColorModeValue("white", "Black");
  return (
    <Box
    w="500px"
    h="500px"
    borderRadius="40px"
    bg={bgLogin}
    transform="rotate(45deg)"
    position="absolute"
    left="-250px"
  ></Box>
  )
}
export default DivGrade