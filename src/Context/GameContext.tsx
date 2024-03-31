import type {PropsWithChildren} from "react";
import React, {Suspense} from "react";
import {fetchSessionStatus} from "../API/fetchSessionStatus";
import {Screen} from "./Screen";
import {AppLoader} from "../Juego/Loader/AppLoader";
import {Theme} from "@radix-ui/themes";

export interface GameContext {

}

export const GameContext = React.createContext<GameContext>({});
export const useGameContext = () => React.useContext(GameContext);

/**
 * Contexto principal del juego.
 * @param props
 * @constructor
 */
export const GameRoot = (props: PropsWithChildren) => {
    return <GameContext.Provider value={{}}>
        <Theme>
            <Suspense fallback={<AppLoader/>}>
                <Screen sessionPromise={fetchSessionStatus()}>
                    {props.children}
                </Screen>
            </Suspense>
        </Theme>
    </GameContext.Provider>;
}