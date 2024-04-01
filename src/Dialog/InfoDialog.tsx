import React from "react";
import {AlertDialog, Button, Flex} from "@radix-ui/themes";

/**
 * Dialogo informativo.
 * @param props
 * @constructor
 */
export function InfoDialog(props: any) {
    return <AlertDialog.Root open={props.open} onOpenChange={props.onOpenChange}>
        <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>{props.title}</AlertDialog.Title>
            <AlertDialog.Description size="2">
                {props.children}
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Action>
                    <Button variant="solid" onClick={() => props.onOpenChange(false)}>
                        Aceptar
                    </Button>
                </AlertDialog.Action>
            </Flex>
        </AlertDialog.Content>
    </AlertDialog.Root>
}