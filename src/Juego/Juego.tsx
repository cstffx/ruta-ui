import Loader from "./Loader";
import React, {Suspense} from "react";
import {useSession} from "../Hooks/useSession";
import {LoginScreen} from "../Login/LoginScreen";

export function Juego() {

    const session = useSession();

    let mainComponent;
    if (session.isAnonimous()) {
        mainComponent = <LoginScreen/>
    }

    return <Suspense fallback={<Loader.App/>}>

    </Suspense>
}