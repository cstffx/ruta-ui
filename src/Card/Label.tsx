import React from "react";
import cls from "classnames"

export interface LabelProps extends React.PropsWithChildren {
    pl?: string;
    disabled?: boolean;
}

export default function (props: LabelProps) {
    return <span className={cls(
        "Label",
        {"Label-disabled": props.disabled}
    )} style={{paddingLeft: props.pl}}>
        {props.children}
    </span>
}