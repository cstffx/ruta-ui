import React from 'react';
import {Box, Button, Card, Flex, Heading, Text, TextField} from "@radix-ui/themes";
import {useLogin} from "./useLogin";
import {RocketIcon} from "@radix-ui/react-icons";
import {CenterScreen} from "../Game/CenterScreen";

export function LoginScreen() {
    const form = useLogin();
    return <CenterScreen>
        <Box maxWidth="350px">
            <Card size="2" className="Card" variant="surface">
                <Flex direction="column" align="center" gap="3">
                    <RocketIcon width="32" height="32"/>
                    <Flex direction="column" align="center" gap="0">
                        <Heading as="h3" mb="1" size="4">
                            Bienvenido viajero
                        </Heading>
                        <Text size="2" color="gray" mb="4">
                            Necesitamos tu nombre para continuar
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction="column" py="2" gap="4">
                    <Flex direction="row" justify="center" gap={"2"}>
                        <TextField.Root size="2" {...form.username}/>
                    </Flex>
                    <Flex direction="row" align="center" justify="center" className="Footer">
                        <Button {...form.submit}>Hecho</Button>
                    </Flex>
                </Flex>
            </Card>
        </Box>
    </CenterScreen>
}