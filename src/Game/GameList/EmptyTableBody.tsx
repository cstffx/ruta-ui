import React from "react";
import {Box, Button, Card, Flex, Heading, Link, Text} from "@radix-ui/themes";
import {CrumpledPaperIcon} from "@radix-ui/react-icons";

/**
 * @constructor
 */
export function EmptyTableBody() {
    return <Flex>
        <Card size="2">
            <Flex direction="column" align="center" py="2">
                <Box mb="2">
                    <CrumpledPaperIcon width="24" height="24" />
                </Box>
                <Heading as="h3" mb="1" size="4">
                    No hay juegos disponibles
                </Heading>
                <Text size="2" color="gray" mb="4">
                    Pero puede ser el primero en crear uno.
                    <Link
                        href="#"
                        underline="hover"
                        onClick={(e) => e.preventDefault()}
                    >
                        archive
                    </Link>
                    .
                </Text>
                <Flex>
                    <Button variant="solid" highContrast>
                        Crear un juego
                    </Button>
                </Flex>
            </Flex>
        </Card>
    </Flex>
}