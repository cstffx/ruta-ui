import React from "react";
import {Flex} from "@radix-ui/themes";
import type {PropsWithChildren} from "react";

/**
 * Centra el contenido en la pantalla.
 * @param props
 * @constructor
 */
export function CenterScreen(props: PropsWithChildren){
    return <Flex justify="center" align="center" height="100dvh">
        {props.children}
    </Flex>
}