import {Flex} from "@radix-ui/themes";
import React from "react";
import Label from "../Label/Label";
import NumberInput from "../NumberInput/NumberInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

export default function () {
    return <Flex className="CardContent" direction="column" pt="4">
        <Flex direction="row" align="center" gap={"2"}>
            <Label pl="35px">Linear:</Label>
            <Checkbox defaultChecked/>
            <NumberInput value="3" diabled={false}/>
        </Flex>
        <Flex direction="row" align="center" gap={"2"}>
            <Label pl="25px">Variable : </Label>
            <Checkbox/>
            <Label disabled>Min : </Label>
            <NumberInput value="0" disabled/>
            <Label disabled>Max : </Label>
            <NumberInput value="2" disabled/>
        </Flex>
        <Flex direction="row" align="center" justify="end" className="Footer">
            <Button>Smart Reset</Button>
        </Flex>
    </Flex>
}