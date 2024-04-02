import React from "react";

export type FetcherKey = number;
export type Fetcher<T> = (config: { key: FetcherKey }) => Promise<T>

/**
 * Produce un obejeto promesa que puede utilizarse como parámetro
 * para React.use y además provee un método para refrescar el componente
 * con una nueva version de la promesa.
 * @param fetcher Función que retorna una promesa para devolder los resultados.
 * @param cleanup Función para limpiar una posible caché utilizada por el fetcher.
 */
export function useFetcher<T>(fetcher: Fetcher<T>, cleanup?: () => void) {
    const [key, setKey] = React.useState(0);
    React.useEffect(() => () => {
        cleanup && cleanup()
    });
    return {
        promise: fetcher({key}),
        refresh: () => setKey(key => key + 1)
    }
}