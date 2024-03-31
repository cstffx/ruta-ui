import React from "react";

export interface Session {
    username?: string;
    anonimous?: boolean;
    invalidated?: boolean;
}

let session: Session = {invalidated: true};

/**
 * Resuelve el estado actual de la sesion del jugador.
 * @param onUsernameChange Callback llamadocon el nombre de usuario actual, si alguno.
 */
export async function fetchSessionStatus(onUsernameChange: (username: string) => void) {
    if (session.invalidated) {
        return fetch("ruta/api/jugador/status")
            .then(e => e.json())
            .then(e => {
                onUsernameChange(e.username);
                return e;
            });
    }
    return session;
}