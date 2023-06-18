import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Info() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const url = "https://6486ccf3beba6297278f2f89.mockapi.io/eid";
    const SubmitCard = () => {
        if (name != "" && text != "") {
            axios
                .post(url, {
                    name: name,
                    text: text,
                })
                .then(() => {
                    localStorage.setItem("name", name);
                    localStorage.setItem("text", text);
                });
            navigate("/home");
        }
    };
    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#F9F1E9"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading color={"#564036"} fontSize={"4xl"}>
                        اهلا بالعيد
                    </Heading>
                    <Text fontSize={"lg"} color={"#89796E"}>
                        اكتب معلوماتك وبنسويلك احلا بطاقة{" "}
                        <Link color={"#564036"}>عيد </Link>🐑
                    </Text>
                </Stack>
                <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="text">
                            <FormLabel>الاسم</FormLabel>
                            <Input
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl id="text">
                            <FormLabel>عبارة التهنئة</FormLabel>
                            <Input
                                type="text"
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={"#564036"}
                                color={"white"}
                                _hover={{
                                    bg: "#89796E",
                                }}
                                onClick={() => {
                                    SubmitCard();
                                }}
                            >
                                سو البطاقة
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
