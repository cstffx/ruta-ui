import React from "react";
import stdlib from "../../stdlib";

const MESSAGES = [
    "Revisando llantas.",
    "Escribiendo hoja de ruta.",
    "Cargando combustible.",
    "Limpiando parabrisas.",
];

/**
 * Retorna un mensaje aleatorio cada 2 segundos.
 */
export function useRandomMessage(): string {
    const intervalRef = React.useRef(0);
    const [msg, setMsg] = React.useState(MESSAGES[0]);
    React.useEffect(() => {
        setInterval(() => setMsg(stdlib.rand.randomItem(MESSAGES)), 2000);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);
    return msg;
}