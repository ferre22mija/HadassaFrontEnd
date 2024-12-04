import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import "./style.css";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DivGrade from "./Components/DivGrade";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
function Login() {
  //modo noche de los errores
  const colorBox = useColorModeValue("yellow.200", "yellow.400");

  //formik
  const formik = useFormik({
    initialValues: { usuario: "", contrasena: "" },
    validationSchema: Yup.object({
      usuario: Yup.string().required("campo necesario"),
      contrasena: Yup.string()
        .required("campo necesario")
        .min(8, "la contraseña debe contener 8 caracteres como mínimo")
        .matches(/[0-9]/, "La contraseña debe contener al menos 1 número")
        .matches(
          /[A-Z]/,
          "la contraseña debe contener al menos una letra mayuscula"
        ),
    }),
    onSubmit: (values) => {
      console.log("valor de login", values);
    },
  });
  //showhide
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
      <Box w="100vw" h="100vh" bg="#3a7ea4" p="2">
        <AbsoluteCenter>
          <Box
            boxShadow="lg"
            w="350px"
            h="70vh"
            borderRadius={10}
            overflow="hidden"
            position="relative"
            bgGradient="linear(to-r, #452b90, #5dc1b9)"
          >
            <DivGrade />
            <Box w="70%" h="100%">
              <Flex direction="column" h="500px" justify="center">
                <form onSubmit={formik.handleSubmit}>
                  <FormControl m="4">
                    <Input
                      id="usuario"
                      type="text"
                      variant="flushed"
                      placeholder="Usuario"
                      {...formik.getFieldProps("usuario")}
                    />
                    {formik.touched.usuario && formik.errors.usuario ? (
                      <Box bg={colorBox} my="1" color="black" p="1">
                        Usuario: {formik.errors.usuario}
                      </Box>
                    ) : (
                      <Box h="40px"></Box>
                    )}
                    <InputGroup>
                      <Input
                        id="contrasena"
                        type={show ? 'text' : 'password'}
                        variant="flushed"
                        placeholder="Contraseña"
                        {...formik.getFieldProps("contrasena")}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

                    {formik.touched.contrasena && formik.errors.contrasena ? (
                      <Box bg={colorBox} my="1" color="black" p="1">
                        {formik.errors.contrasena}
                      </Box>
                    ) : (
                      <Box h="40px"></Box>
                    )}

                    <Center>
                      <Button
                        isDisabled={
                          formik.errors.usuario || formik.errors.contrasena
                            ? true
                            : false
                        }
                        type="submit"
                        size="lg"
                        mt="8"
                        ml="5"
                        w="100%"
                        borderRadius="30px"
                        boxShadow="md"
                        colorScheme="cyan"
                        border="3px solid #5dc1b9"
                      >
                        INGRESAR
                      </Button>
                      {/* <ChakraLink as={Link} to="/admin/dashboard">
                        <Button
                          type="submit"
                          size="lg"
                          mt="8"
                          ml="5"
                          w="100%"
                          borderRadius="30px"
                          boxShadow="md"
                          colorScheme="cyan"
                          border="3px solid #5dc1b9"
                        >
                          INGRESAR
                        </Button>
                      </ChakraLink> */}
                    </Center>
                  </FormControl>
                </form>
              </Flex>
            </Box>
          </Box>
        </AbsoluteCenter>
      </Box>
    </>
  );
}
export default Login;
