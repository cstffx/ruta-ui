import React from "react";
import {Box, Button, Flex} from "@radix-ui/themes";
import {GameContext, useGameContext} from "../Context/GameContext";
import {AvatarIcon, ExitIcon} from "@radix-ui/react-icons";

export function UserMenu() {
    const context = useGameContext() as GameContext;
    return <Box>
        <Flex direction="row" gap="2">
            <Button variant="surface" title="Usuario">
                <AvatarIcon width="16px" height="16px"/>
                {context.username || "Autenticarse"}
            </Button>
            <Button variant="surface" title="Salir">
                <ExitIcon/>
            </Button>
        </Flex>
    </Box>
}