import React from "react";
import {UserMenu} from "../User/UserMenu";
import {GameContext, useGameContext} from "../Context/GameContext";
import {GameList} from "./GameList/GameList";
import {Flex} from "@radix-ui/themes";

export function Game() {
    const context = useGameContext() as GameContext;
    return <Flex direction="column" p="2" gap="2" align="center" height="100dvh">
        <UserMenu/>
        <Flex width="100%" flexGrow="2" justify="center" align="center">
            {context.gameId ? null : <GameList/>}
        </Flex>
    </Flex>
}