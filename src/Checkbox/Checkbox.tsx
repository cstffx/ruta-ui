import "./style.css";

import cls from "classnames";
import {Checkbox as RadixCheckbox} from "@radix-ui/themes";

export default function (props: any) {
    let {className, ml, ...r_props} = props;
    return <RadixCheckbox className={cls(className || '', {
        Checkbox: true
    })} {...r_props} style={{
        marginLeft: ml,
    }}/>
}