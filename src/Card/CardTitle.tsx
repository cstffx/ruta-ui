import {Flex} from "@radix-ui/themes";
import QuestionIcon from "./QuestionIcon";
import CaretUp from "./CaretUp";

export default function (){
    return <Flex className="CardTitle" justify="between" align="center" px="2">
        <b>EXTRUSION</b>
        <Flex justify="end" align="center" gap="1">
            <QuestionIcon></QuestionIcon>
            <CaretUp></CaretUp>
        </Flex>
    </Flex>
}