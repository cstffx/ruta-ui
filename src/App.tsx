import '@radix-ui/themes/styles.css';
import "./theme.css";

import {Theme} from "@radix-ui/themes";
import {LoginCard} from "./Login/LoginCard";

export default function () {
    return <Theme>
        <LoginCard/>
    </Theme>
}