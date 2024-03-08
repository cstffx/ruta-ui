import "./style.css"
import {TextField} from "@radix-ui/themes";
import clx from "classnames";
import CaretUp from "./control/CaretUp";
import CaretDown from "./control/CaretDown";

interface NumberInputProps {
    value?: string;
    defaultValue?: string | number;
    disabled?: boolean;
    ml?: string;
}

export default function (props: NumberInputProps) {
    const {disabled, ml} = props;
    return <TextField.Root className={clx("NumberInput", {
        "NumberInput-disable": disabled
    })} style={{marginLeft: ml}}>
        <TextField.Input type="number"
                         value={props.value}
                         defaultValue={props.defaultValue}
                         disabled={disabled}/>
        <TextField.Slot>
            <div className="Controls">
                <div className={clx("Spin Spin-up",{
                    "Spin-disabled": disabled
                })}>
                    <CaretUp/>
                </div>
                <div className={clx("Spin Spin-down",{
                    "Spin-disabled": disabled
                })}>
                    <CaretDown/>
                </div>
            </div>
        </TextField.Slot>
    </TextField.Root>
}