import React from "react";
import {Button, Spinner} from "@radix-ui/themes";
import {BookmarkIcon} from "@radix-ui/react-icons";
import {useRandomMessage} from "./useRandomMessage";

export function AppLoader() {
    const message = useRandomMessage();
    return <Button disabled>
        <Spinner loading>
            <BookmarkIcon />
        </Spinner>
        {message}
    </Button>
}