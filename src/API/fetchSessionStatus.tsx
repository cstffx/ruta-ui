import React from "react";

export interface Session {
    username?: string;
    anonimous?: true;
}

let cacheKey:any = null;
let cache: any;

/**
 * Resuelve el estado actual de la sesion del jugador.
 */
export async function fetchSessionStatus({key, fn} : {key:any, fn:any}) {
    if(key === cacheKey){
        return cache;
    }
    cacheKey = key;
    return fetch("ruta/api/jugador/status")
        .then(e => e.json())
        .then(token => {
            cache = token;
            fn(token);
            return token;
        });
}
