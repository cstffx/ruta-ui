import React from "react";
import {Button, Spinner} from "@radix-ui/themes";
import {BookmarkIcon} from "@radix-ui/react-icons";
import {useRandomMessage} from "./useRandomMessage";
import {CenterScreen} from "../CenterScreen";

export function AppLoader() {
    const message = useRandomMessage();
    return <CenterScreen>
        <Button disabled>
            <Spinner loading>
                <BookmarkIcon/>
            </Spinner>
            {message}
        </Button>
    </CenterScreen>
}