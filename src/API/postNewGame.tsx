import React from "react";

interface GameConfig {
    modo: "Individual" | "Equipo",
    jugadores: number
}

/**
 * Solicita al servidor que se reinicie.
 */
export async function postNewGame(config: GameConfig) {
    return fetch("ruta/api/juego", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify(config)
    }).then(e => {
        if(e.status == 200){
            return e.json()
        }
        return {error: true, status: e.status};
    });
}