import React from "react";
import type {ToggleButtonsProps} from "../ToogleButton/ToogleButton";
import {postNewGame} from "../API/postNewGame";
import type {ButtonProps} from "@radix-ui/themes";

type Modo = "Individual" | "Equipo";

export function useNewGameDialog(props: any): any {

    const [modo, setModo] = React.useState<Modo>("Individual");
    const [jugadores, setJugadores] = React.useState("2");
    const [pendding, setPendding] = React.useState(false);

    return {
        modo: {
            type: "single",
            values: ['Individual', 'Equipo'] as Modo[],
            value: modo,
            onValueChange: (value: Modo) => setModo(value)
        } as ToggleButtonsProps,
        cantidad: {
            type: "single",
            values: ['2', '4', '6'],
            value: jugadores,
            onValueChange: (value) => setJugadores(value)
        } as ToggleButtonsProps,
        submit: {
            loading: pendding,
            onClick: async () => {
                setPendding(true);
                try {
                    await postNewGame({
                        jugadores: parseInt(jugadores),
                        modo
                    });
                    props.onOpenChange(false);
                    props.onCreate();
                } catch (e) {
                    // TODO: Informar errores.
                    console.log(e);
                    props.onCreate();
                } finally {
                    setPendding(false);
                }
            }
        } as ButtonProps
    }
}