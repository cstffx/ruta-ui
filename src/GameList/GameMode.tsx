import React from "react";

import {ComponentBooleanIcon, ComponentInstanceIcon} from "@radix-ui/react-icons";
import {Flex} from "@radix-ui/themes";

export function GameMode({children}: any) {
    return <Flex gap="2" align="center">
        {children == "Individual" ? <ComponentInstanceIcon color="violet"/> : <ComponentBooleanIcon color="orange"/>}
        {children}
    </Flex>
}