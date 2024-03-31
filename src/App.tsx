import '@radix-ui/themes/styles.css';
import "./theme.css";
import {Game} from "./Game/Game";
import React from "react";
import {GameRoot} from "./Context/GameContext";

export default function () {
    return <GameRoot>
        <Game/>
    </GameRoot>
}