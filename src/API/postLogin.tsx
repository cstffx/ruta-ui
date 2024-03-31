import React from "react";

/**
 * Reserva un nombre de usuario.
 * @param username
 */
export async function postLogin(username: string) {
    fetch("ruta/api/jugador/login", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            username
        })
    }).then(e => e.json());
}