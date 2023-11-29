import { AbsoluteCenter, Box, Button, Center, Flex, FormControl, FormLabel, Input, Stack,useColorModeValue } from "@chakra-ui/react"
import "./style.css";
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link } from "react-router-dom";
function Login() {
  const bgLogin = useColorModeValue("white","Black")
  return (
    <>
      <Box w="100vw" h="100vh" bg="#3a7ea4" p="2">
        <AbsoluteCenter>

          <Box boxShadow='lg' w="350px" h="70vh" borderRadius={10} overflow="hidden" position="relative"
            bgGradient='linear(to-r, #452b90, #5dc1b9)'>
            <Box w="500px" h="500px" borderRadius="40px" bg={bgLogin} transform="rotate(45deg)" position="absolute" left="-250px"></Box>
            <Box w="70%" h="100%" >
              <Flex direction="column" h="500px" justify="center">
                <FormControl>


                  <Input variant='flushed' placeholder='Usuario' m="4" />
                  <Input variant='flushed' placeholder='Contraseña' m="4" />
                  <Center>
                    <ChakraLink as={Link} to="/admin/dashboard">
                      <Button size="lg" mt="8" ml="5" w="100%"
                        borderRadius="30px" boxShadow='md' colorScheme="cyan" border="3px solid #5dc1b9"> INGRESAR</Button>

                    </ChakraLink>

                  </Center>




                </FormControl>
              </Flex>
            </Box>

          </Box>
        </AbsoluteCenter>
      </Box>
    </>
  )
}
export default Login