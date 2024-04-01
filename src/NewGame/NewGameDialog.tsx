import React from 'react';
import {useNewGameDialog} from "./useNewGameDialog";
import {ToggleButtons} from "../ToogleButton/ToogleButton";
import {Text, Box, Dialog, Flex, Grid, Button} from "@radix-ui/themes";

interface NewGameDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function NewGameDialog(props: NewGameDialogProps) {
    const form = useNewGameDialog();
    return <Dialog.Root {...props}>
        <Dialog.Content maxWidth="300px">
            <Dialog.Title size="4">Nuevo juego</Dialog.Title>
            <Dialog.Description size="2">Seleccione una configuración para el tipo de partida.</Dialog.Description>
            <Flex direction="column" gap="2" pt="4">
                <Box>
                    <Text as="div" size="2" weight="bold" mb="2">
                        Modo de juego
                    </Text>
                    <Grid asChild gap="1" columns="2">
                        <ToggleButtons {...form.modo}/>
                    </Grid>
                </Box>
                <Box>
                    <Text as="div" size="2" weight="bold" mb="2">
                        Cantidad jugadores
                    </Text>
                    <Grid asChild gap="1" columns="5">
                        <ToggleButtons {...form.cantidad}/>
                    </Grid>
                </Box>
                <Flex direction="row" justify="end">
                    <Flex direction="row" align="center" justify="center" className="Footer">
                        <Button {...form.submit}>Hecho</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
}