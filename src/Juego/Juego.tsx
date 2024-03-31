import Loader from "./Loader";
import React, {Suspense} from "react";
import {LoginScreen} from "../Login/LoginScreen";
import {fetchSessionStatus} from "../API/fetchSessionStatus";
import type {Session} from "../API/fetchSessionStatus";

interface JuegoScreenProps {
    sessionPromise: Promise<Session>;
}

function JuegoScreen(props: JuegoScreenProps){
    const session = React.use<Session>(props.sessionPromise);
    return session.anonimous ? <LoginScreen/> : "Ready to play";
}

export function Juego() {
    return <Suspense fallback={<Loader.App/>}>
        <JuegoScreen sessionPromise={fetchSessionStatus()}/>
    </Suspense>
}