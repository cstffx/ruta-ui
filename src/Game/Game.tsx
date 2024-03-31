import React from "react";
import {CenterScreen} from "./CenterScreen";
import {UserMenu} from "../User/UserMenu";

export function Game() {
    return <CenterScreen>
        <UserMenu/>
    </CenterScreen>
}