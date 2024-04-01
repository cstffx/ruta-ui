import React from "react";

export interface GameInfo {
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
        {iniciado: false, modo: "Individual", jugadoresMaximos: 6, jugadores: 4, owner: "User"},
        {iniciado: false, modo: "Individual", jugadoresMaximos: 6, jugadores: 4, owner: "User"},
        {iniciado: false, modo: "Individual", jugadoresMaximos: 6, jugadores: 4, owner: "User"},
        {iniciado: false, modo: "Individual", jugadoresMaximos: 6, jugadores: 4, owner: "User"},
        {iniciado: false, modo: "Por Equipos", jugadoresMaximos: 6, jugadores: 4, owner: "User"},
    ]
    // return fetch("ruta/api/juego").then(e => e.json());
}