import React from "react";
import type {ToggleButtonsProps} from "../ToogleButton/ToogleButton";

export function useNewGameDialog() {
    const [modo, setModo] = React.useState("Individual");
    const [cantidad, setCantidad] = React.useState("2");
    return {
        modo: {
            type: "single",
            values: ['Individual', 'Por equipo'],
            value: modo,
            onValueChange: (value: string) => setModo(value)
        } as ToggleButtonsProps,
        cantidad: {
            type: "single",
            values: ['2', '4', '6'],
            value: cantidad,
            onValueChange: (value) => setCantidad(value)
        } as ToggleButtonsProps,
        submit: {
            onClick: async () => {
            }
        }
    }
}