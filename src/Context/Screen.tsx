import type {Session} from "../API/fetchSessionStatus";
import React from "react";
import type {PropsWithChildren} from "react";
import {LoginScreen} from "../Login/LoginScreen";

export interface JuegoScreenProps extends PropsWithChildren {
    sessionPromise: any
}

/**
 * Pantalla del juego.
 * Si el usuario no está autenticado muestra pantalla de login.
 * @param props
 * @constructor
 */
export function Screen(props: JuegoScreenProps) {
    let username = React.use<Session>(props.sessionPromise).username;
    return !username ? <LoginScreen/> : props.children;
}