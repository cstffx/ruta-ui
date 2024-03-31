import React from "react";
import {postLogin} from "../API/postLogin";

export function useLogin() {
    const [username, setUsername] = React.useState("");
    return {
        username: {
            autofocus: true,
            placeholder: "Nombre del jugador",
            value: username,
            onChange: (e: any) => {
                setUsername(e.target.value)
            },
        },
        submit: {
            onClick: async () => {
                await postLogin(username);
            }
        }
    }
}