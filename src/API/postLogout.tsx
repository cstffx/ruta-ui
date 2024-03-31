import React from "react";

/**
 * Solicita que la sesión del usuario termine.
 */
export async function postLogout() {
    fetch("ruta/api/jugador/logout", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        }
    }).then(e => e.json());
}