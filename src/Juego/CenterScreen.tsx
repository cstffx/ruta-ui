import React from "react";
import {Flex} from "@radix-ui/themes";
import type {PropsWithChildren} from "react";

export function CenterScreen(props: PropsWithChildren){
    return <Flex justify="center" align="center" height="100dvh">
        {props.children}
    </Flex>
}