import React from "react";
import {UserMenu} from "../User/UserMenu";
import {GameContext, useGameContext} from "../Context/GameContext";
import {GameList} from "./GameList/GameList";
import {Box, Flex} from "@radix-ui/themes";

export function Game() {
    const context = useGameContext() as GameContext;
    return <Flex direction="column" p="2" gap="2" align="center">
        <UserMenu/>
        <Box width="50%">
            {context.gameId ? null : <GameList/>}
        </Box>
    </Flex>
}