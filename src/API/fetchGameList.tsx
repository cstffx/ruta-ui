import React from "react";

export interface GameInfo {
    id: string;
    owner: string;
    iniciado: boolean;
    jugadores: number;
    modo: string;
    jugadoresMaximos: number;
}

let cache: any;
let cacheKey: any = null;

/**
 * Resuelve el listado de juegos disponibles.
 */
export async function fetchGameList({key}: any): Promise<GameInfo[]> {
    if (key === cacheKey && cache != undefined) {
        return cache;
    }
    cacheKey = key;
    return fetch("ruta/api/juego")
        .then(e => e.json())
        .then(items => {
            return cache = items;
        });
}

export function clearGameListCache() {
    cache = undefined;
}