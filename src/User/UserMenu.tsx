import React from "react";
import {Box, Button, Flex} from "@radix-ui/themes";
import {GameContext, useGameContext} from "../Context/GameContext";
import {AvatarIcon, ExitIcon, ReloadIcon} from "@radix-ui/react-icons";
import {useUserMenu} from "./useUserMenu";

export function UserMenu() {
    const form = useUserMenu();
    const context = useGameContext() as GameContext;
    return <Box width="100%" px="3">
        <Flex direction="row" gap="2" justify="end">
            <Button {...form.user}>
                <AvatarIcon width="16px" height="16px"/>
                {context.username || "Autenticarse"}
            </Button>
            <Button {...form.exit}>
                <ExitIcon/>
            </Button>
            <Button {...form.reload}>
                <ReloadIcon/>
            </Button>
        </Flex>
    </Box>
}