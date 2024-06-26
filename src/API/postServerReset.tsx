import React from "react";

/**
 * Solicita al servidor que se reinicie.
 */
export async function postServerReset() {
    return fetch("ruta/api/server/reset", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        }
    });
}