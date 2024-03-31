import React from "react";

/**
 * Solicita que la sesión del usuario termine.
 */
export async function postLogout() {
    return fetch("ruta/api/jugador/logout", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        }
    });
}