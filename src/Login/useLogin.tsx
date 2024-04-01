import React from "react";
import {GameContext, useGameContext} from "../Context/GameContext";

export function useLogin() {
    const [username, setUsername] = React.useState("");
    const context = useGameContext() as GameContext;
    return {
        username: {
            autoFocus: true,
            placeholder: "Nombre del jugador",
            value: username,
            onChange: (e: any) => {
                setUsername(e.target.value)
            },
        },
        submit: {
            onClick: () => context.login(username)
        }
    }
}