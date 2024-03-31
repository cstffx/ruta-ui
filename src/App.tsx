import '@radix-ui/themes/styles.css';
import "./theme.css";

import {Theme} from "@radix-ui/themes";
import {Juego} from "./Juego/Juego";

export default function () {
    return <Theme>
        <Juego/>
    </Theme>
}