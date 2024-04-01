import React from "react";

/**
 * Solicita al servidor que se reinicie.
 */
export async function postJoin(juegoId: string) {
    fetch("ruta/api/juego/join", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            juegoId
        })
    }).then(e => e.json());
}