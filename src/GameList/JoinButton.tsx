import {PlayIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";
import React from "react";

export function JoinButton({item, form}: any){
    return <Button data-id={item.id}
                   size="1" {...form.joinButton}>
        <PlayIcon/>Unirse
    </Button>
}