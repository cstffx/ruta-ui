import type {PropsWithChildren} from "react";
import React, {Suspense} from "react";
import {fetchSessionStatus} from "../API/fetchSessionStatus";
import {Screen} from "./Screen";
import {Theme} from "@radix-ui/themes";
import {postLogout} from "../API/postLogout";
import {AppLoader} from "../Loader/AppLoader";
import {postLogin} from "../API/postLogin";
import {InfoDialog} from "../Dialog/InfoDialog";

export interface GameContext {
    username: string;
    setUsername: (username: string) => void;
    gameId: string;
    setGameId: (username: string) => void;
    logout: () => void;
    login: (username: string) => void;
    revalidateSession: () => void;
}

export const GameContext = React.createContext<GameContext | {}>({});
export const useGameContext = () => React.useContext(GameContext);

/**
 * Contexto principal del juego.
 * @param props
 * @constructor
 */
export const GameRoot = (props: PropsWithChildren) => {

    const [open, setOpen] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const [username, setUsername] = React.useState("");
    const [gameId, setGameId] = React.useState("");

    async function login(username: string) {
        try{
            const result = await postLogin(username);
            await revalidateSession();
            setUsername(username);
        }catch (e){
            setOpen(true);
        }
    }

    async function logout() {
        // exit from server
        await postLogout();
        // update interface. login again
        await revalidateSession();
    }

    async function revalidateSession() {
        setKey(key => key + 1);
    }

    //@ts-ignore
    window.m = revalidateSession;

    return <GameContext.Provider value={{
        username,
        setUsername,
        gameId,
        setGameId,
        logout,
        revalidateSession,
        login,
    }}>
        <Theme>
            <InfoDialog open={open} onOpenChange={setOpen}>
                El nombre de usuario ya se encuentra en uso
            </InfoDialog>
            <Suspense fallback={<AppLoader/>}>
                <Screen sessionPromise={fetchSessionStatus({
                    key,
                    fn: (data: any) => {
                        setUsername(data.username)
                    }
                })}>
                    {props.children}
                </Screen>
            </Suspense>
        </Theme>
    </GameContext.Provider>;
}