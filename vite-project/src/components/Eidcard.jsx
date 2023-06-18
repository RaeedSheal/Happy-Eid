import {
    Box,
    Image,
    Text,
    Center,
    useColorModeValue,
    Heading,
    Stack,
} from "@chakra-ui/react";

const Eidcard = () => {
    const name = localStorage.getItem("name");
    const text = localStorage.getItem("text");

    return (
        <>
            <Center py={12} h={"100vh"} bg={"#F9F1E9"}>
                <Box
                    role={"group"}
                    p={6}
                    maxW={"330px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                    pos={"relative"}
                    zIndex={1}
                >
                    <Box
                        rounded={"lg"}
                        mt={-12}
                        pos={"relative"}
                        height={"230px"}
                        _after={{
                            transition: "all .3s ease",
                            content: '""',
                            w: "full",
                            h: "full",
                            pos: "absolute",
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${"../public/sheepeid.png"})`,
                            filter: "blur(15px)",
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: "blur(20px)",
                            },
                        }}
                    >
                        <Image
                            rounded={"lg"}
                            height={230}
                            width={282}
                            objectFit={"cover"}
                            src={"../public/sheepeid.png"}
                        />
                    </Box>
                    <Stack pt={10} align={"center"}>
                        <Heading
                            color={"#564036"}
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            fontWeight={500}
                        >
                            {text}
                        </Heading>
                        <Text
                            color={"#89796E"}
                            fontSize={"sm"}
                            textTransform={"uppercase"}
                        >
                            إهداء من {name}
                        </Text>
                    </Stack>
                </Box>
            </Center>
        </>
    );
};

export default Eidcard;
