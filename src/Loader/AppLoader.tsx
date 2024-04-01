import React from "react";
import {useRandomMessage} from "./useRandomMessage";
import {Loader} from "./Loader";
import {CenterScreen} from "../Game/CenterScreen";

/**
 * Muestra un mensaje indicando la carga de datos.
 * @constructor
 */
export function AppLoader() {
    const message = useRandomMessage();
    return <CenterScreen>
        <Loader>{message}</Loader>
    </CenterScreen>
}