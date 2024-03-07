import React from "react";
import {Flex} from "@radix-ui/themes";
import CaretUp from "./CaretUp";
import cls from "classnames";
import CaretDown from "./CaretDown";

interface ButtonProps {
    up: boolean;
    disabled: boolean;
}

function Button(props: ButtonProps) {
    const fill = props.disabled ? "#67666a" : "#e6e6e6";
    const rest = {
        w: 15,
        h: 15,
        fill
    };
    return <Flex className={cls("Control-button", {
        "Control-button-disabled": props.disabled,
        "Control-button-up": props.up,
        "Control-button-down": !props.up,
    })} direction="column" justify="center" align="center">
        {props.up ? <CaretUp {...rest} /> : <CaretDown {...rest} />}
    </Flex>
}

export default function (props: { disabled: boolean }) {
    return <Flex className={cls({
        "Control": true,
        "Control-disabled": props.disabled
    })} direction="column" justify="between" align="center">
        <Button up={true} disabled={props.disabled}/>
        <Button up={false} disabled={props.disabled}/>
    </Flex>
}