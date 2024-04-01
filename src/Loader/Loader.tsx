import React from "react";
import {Button, Spinner} from "@radix-ui/themes";
import {BookmarkIcon} from "@radix-ui/react-icons";

/**
 * Muestra un mensaje indicando la carga de datos.
 * @constructor
 */
export function Loader({childrens}: any) {
    return <Button disabled>
        <Spinner loading>
            <BookmarkIcon/>
        </Spinner>
        {childrens}
    </Button>

}