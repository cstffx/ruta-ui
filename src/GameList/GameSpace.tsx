import React from "react";
import {Progress, Text} from "@radix-ui/themes";

import "./GameTable.css"

export function GameSpace({item}: any) {
    const value = item.jugadores;
    const max = item.jugadoresMaximos;
    return <>
        <Progress value={value / max * 100}></Progress>
        <Text color="gray" size="1">{value}/{max}</Text>
    </>
}