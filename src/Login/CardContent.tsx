import {Flex, TextField} from "@radix-ui/themes";
import React from "react";
import Button from "../Button/Button";
import {useLogin} from "./useLogin";

export default function () {
    const form = useLogin();
    return <Flex direction="column" py="2" gap="4">
        <Flex direction="row" justify="center" gap={"2"}>
            <TextField.Input size="2" autoFocus={true} placeholder="Nombre del jugador" />
        </Flex>
        <Flex direction="row" align="center" justify="center" className="Footer">
            <Button onClick={form.submit}>Hecho</Button>
        </Flex>
    </Flex>
}