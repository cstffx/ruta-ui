import React from "react";

export interface GameInfo {
    id: string;
    owner: string;
    iniciado: boolean;
    jugadores: number;
    modo: string;
    jugadoresMaximos: number;
}

/**
 * Resuelve el listado de juegos disponibles.
 */
export async function fetchGameList():Promise<GameInfo[]> {
    return [
        {id: "some_id", iniciado: false, modo: "Individual", jugadoresMaximos: 6, jugadores: 4, owner: "User"},
    ]
    // return fetch("ruta/api/juego").then(e => e.json());
}