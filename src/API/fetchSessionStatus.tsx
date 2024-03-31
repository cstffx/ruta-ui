import React from "react";

export interface Session {
    username?: string;
    anonimous?: boolean;
    invalidated?: boolean;
}

let session: Session = {invalidated: true};

/**
 * Resuelve el estado actual de la sesion del jugador.
 */
export async function fetchSessionStatus() {
    if(session.invalidated){
        return fetch("ruta/api/jugador/status").then(e => e.json());
    }
    return session;
}