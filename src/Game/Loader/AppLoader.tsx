import React from "react";
import {useRandomMessage} from "./useRandomMessage";
import {CenterScreen} from "../CenterScreen";
import {Loader} from "./Loader";

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