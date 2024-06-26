import React from "react";
import {Box, Button, Card, Flex, Heading, Text} from "@radix-ui/themes";
import type {ButtonProps} from "@radix-ui/themes";
import {CrumpledPaperIcon, PlayIcon} from "@radix-ui/react-icons";

interface EmptyTableBodyProps {
    onNew: () => void;
}

function useEmptyTableBody(props: EmptyTableBodyProps) {
    return {
        newButton: {
            highContrast: true,
            onClick: props.onNew,
            variant: "solid"
        } as ButtonProps,
    }
}

/**
 * Mostrado para indicar que una tabla se encuentra vacía
 * @constructor
 */
export function EmptyTableBody(props: EmptyTableBodyProps) {
    const form = useEmptyTableBody(props);
    return <Card size="2">
        <Flex direction="column" align="center" py="2">
            <Box mb="2">
                <CrumpledPaperIcon width="24" height="24"/>
            </Box>
            <Heading as="h3" mb="1" size="4">
                No hay juegos disponibles
            </Heading>
            <Text size="2" color="gray" mb="4">
                Pero puedes ser el primer chofer en crear uno.
            </Text>
            <Flex>
                <Button {...form.newButton}>
                    <PlayIcon/> Crear un juego
                </Button>
            </Flex>
        </Flex>
    </Card>
}