import React from "react";

/**
 * Reserva un nombre de usuario.
 * @param username
 */
export async function postLogin(username: string): Promise<any> {
    return fetch("ruta/api/jugador/login", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            username
        })
    }).catch(e => {
        throw e
    }).then(e => e.json());
}