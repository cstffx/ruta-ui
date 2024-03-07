import React from "react";

export interface LabelProps extends React.PropsWithChildren {
    pl?: string;
}

export default function (props: LabelProps) {
    return <span className="Label" style={{paddingLeft: props.pl}}>
        {props.children}
    </span>
}