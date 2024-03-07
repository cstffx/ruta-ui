import React from "react";
import type {IconProps} from "./types";

export default function (props: IconProps) {
    return <svg width={props.w} height={props.h}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M4 9H11L7.5 4.5L4 9Z" fill={props.fill}></path>
    </svg>
}