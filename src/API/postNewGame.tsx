import React from "react";

interface GameConfig {
    mode: "Individual" | "PorEquipos",
    size: number
}

/**
 * Solicita al servidor que se reinicie.
 */
export async function postServerReset() {
    fetch("ruta/api/juego/create", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        }
    }).then(e => e.json());
}