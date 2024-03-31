import type {PropsWithChildren} from "react";
import React, {Suspense} from "react";
import {fetchSessionStatus} from "../API/fetchSessionStatus";
import {Screen} from "./Screen";
import {AppLoader} from "../Game/Loader/AppLoader";
import {Theme} from "@radix-ui/themes";
import {postLogout} from "../API/postLogout";

export interface GameContext {
    username: string;
    setUsername: (username: string) => void;
    gameId: string;
    setGameId: (username: string) => void;
    logout: () => void;
}

export const GameContext = React.createContext<GameContext | {}>({});
export const useGameContext = () => React.useContext(GameContext);

/**
 * Contexto principal del juego.
 * @param props
 * @constructor
 */
export const GameRoot = (props: PropsWithChildren) => {
    const [username, setUsername] = React.useState("");
    const [gameId, setGameId] = React.useState("");

    async function logout() {
        await postLogout();
        setUsername("");
    }

    return <GameContext.Provider value={{
        username,
        setUsername,
        gameId,
        setGameId,
        logout
    }}>
        <Theme>
            <Suspense fallback={<AppLoader/>}>
                <Screen sessionPromise={fetchSessionStatus(setUsername)}>
                    {props.children}
                </Screen>
            </Suspense>
        </Theme>
    </GameContext.Provider>;
}