import {Flex, Heading, Text} from "@radix-ui/themes";
import {RocketIcon} from "@radix-ui/react-icons";

export default function (){
    return  <Flex direction="column" align="center" gap="3">
        <RocketIcon width="32" height="32"/>
        <Flex direction="column" align="center" gap="0">
            <Heading as="h3" mb="1" size="4">
                Bienvenido viajero
            </Heading>
            <Text size="2" color="gray" mb="4">
                Necesitamos tu nombre para continuar
            </Text>
        </Flex>
    </Flex>
}