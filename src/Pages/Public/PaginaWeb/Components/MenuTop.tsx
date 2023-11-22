import { ArrowRightIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link } from "react-router-dom"
function MenuTop() {
    return (
        <Box bg="blue.300" p="3">
            <Flex>
                <Text> LOGO</Text>
                <Spacer />
                <ChakraLink as={Link} to="/login">
                    <Button>
                        <ArrowRightIcon />
                        <Text mx="2"> Login  </Text>
                    </Button>
                </ChakraLink>

            </Flex>

        </Box>
    )
}
export default MenuTop