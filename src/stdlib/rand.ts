/**
 * Funciones para generar valores aleatorios.
 */
export default class rand {
    /**
     * Retorna un elemento aleatorio de una lista.
     * @param list
     */
    public static randomItem<T>(list: T[]) {
        return list[rand.int(0, list.length - 1)];
    }

    /**
     * Retorna un valor aleatorio entre dos valores.
     * @param min
     * @param max
     */
    public static int(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}