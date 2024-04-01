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
    return fetch("ruta/api/juego").then(e => e.json());
}