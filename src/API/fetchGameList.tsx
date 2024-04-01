import React from "react";

export interface GameInfo {
    id: string;
    owner: string;
    iniciado: boolean;
    jugadores: number;
    modo: string;
    jugadoresMaximos: number;
}

let cacheKey: any = null;
let cache: any;

/**
 * Resuelve el listado de juegos disponibles.
 */
export async function fetchGameList({key}: any): Promise<GameInfo[]> {
    if (key === cacheKey) {

    }
    return [
        {id: "aaa", owner: "gol"}
    ];
    cacheKey = key;
    return fetch("ruta/api/juego")
        .then(e => e.json())
        .then(items => {
            return cache = items;
        });
}