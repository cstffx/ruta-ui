import React from "react";

/**
 * Solicita al servidor que se reinicie.
 */
export async function postJoin(juegoId: string, equipoId: number) {
    fetch(`ruta/api/juego/join/${juegoId}/0`, {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        }
    }).then(e => e.json());
}