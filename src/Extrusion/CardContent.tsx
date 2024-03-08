import {Flex} from "@radix-ui/themes";
import React from "react";
import Label from "../Label/Label";
import NumberInput from "../NumberInput/NumberInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import {useExtrusion} from "./useExtrusion";

export default function () {
    const form = useExtrusion();

    return <Flex className="CardContent" direction="column" pt="4" ref={form.root}>
        <Flex direction="row" align="center" gap={"2"}>
            <Label pl="37px" {...form.linear.label}>Linear :</Label>
            <Checkbox {...form.linear.checkbox}/>
            <NumberInput defaultValue={0} {...form.linear.input}/>
        </Flex>
        <Flex direction="row" align="center" gap={"0"}>
            <Label pl={"22px"}
                   {...form.variable.label}>Variable : </Label>
            <Checkbox ml="11px" {...form.variable.checkbox}/>
            <Label pl="11px" {...form.variable.min.label}>Min : </Label>
            <NumberInput defaultValue={0} ml="11px" {...form.variable.min.input}/>
            <Label pl="17px" {...form.variable.min.label}>Max : </Label>
            <NumberInput defaultValue={0} ml="11px" {...form.variable.max.input}/>
        </Flex>
        <Flex direction="row" align="center" justify="end" className="Footer">
            <Button onClick={form.reset}>Smart Reset</Button>
        </Flex>
    </Flex>
}