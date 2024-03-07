import "./style.css"
import {TextField} from "@radix-ui/themes";
import ControlButtons from "./ControlButtons";
import clx from "classnames";

export default function (props: any) {
    return <TextField.Root className={clx("NumberInput", {
        "NumberInput-disable": props.disabled
    })}>
        <TextField.Input value={props.value}/>
        <TextField.Slot>
            <ControlButtons disabled={props.disabled}/>
        </TextField.Slot>
    </TextField.Root>
}