import React, {Suspense} from "react";
import {Button, Flex, Table, Text} from "@radix-ui/themes";
import {EmptyTableBody} from "./EmptyTableBody";
import type {GameInfo} from "../API/fetchGameList";
import {fetchGameList} from "../API/fetchGameList";
import {PlusIcon, ReloadIcon} from "@radix-ui/react-icons";
import {GameListLoader} from "./GameListLoader";

import {GameSpace} from "./GameSpace";
import {GameMode} from "./GameMode";
import {NewGameDialog} from "../NewGame/NewGameDialog";
import {JoinButton} from "./JoinButton";
import {postJoin} from "../API/postJoin";

interface GameTableProps {
    fetchItems: any;
    onReload?: () => void;
}

function Cell({children}: any) {
    return <Table.Cell valign="middle">{children}</Table.Cell>
}

const useGameTable = (props: any) => {
    const [open, setOpen] = React.useState(false);

    const dialogTrigger = () => {
        setOpen(true);
    }

    return {
        empty: {
            onNew: dialogTrigger,
        },
        joinButton: {
            onClick: async (e: any) => {
                const id = e.target.getAttribute("data-id");
                const result = await postJoin(id);
            }
        },
        newButton: {
            onClick: dialogTrigger
        },
        dialog: {
            open,
            onCreate: () => {
                console.log("on Create");
                props.onReload();
            },
            onOpenChange: setOpen
        },
    }
}

export function GameTable(props: GameTableProps) {

    const form = useGameTable(props);
    const items = (React.use(props.fetchItems) as GameInfo[])
        .filter(item => !item.iniciado);

    if (!items.length) {
        return <>
            <EmptyTableBody {...form.empty}/>
            <NewGameDialog {...form.dialog}/>
        </>
    } else {
        return <Flex direction="column" gap="2">
            <Flex justify="between" align="center" gap="6">
                <Flex direction="column">
                    <Text size="2" weight="bold" color="gray" as="p">
                        Juegos abiertos
                    </Text>
                    <Text size="2" color="gray" as="p">
                        Únase a un juego existente o cree uno nuevo
                    </Text>
                </Flex>
                <Flex direction="row" gap="2">
                    <Button color="green" {...form.newButton}>
                        <PlusIcon/>Nuevo
                    </Button>
                    <Button variant="outline" onClick={props.onReload}><ReloadIcon/></Button>
                </Flex>
            </Flex>
            <Table.Root variant="surface" size="1" className={"GameTable"}>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Modo</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Jugadores</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Creador</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items.filter(item => !item.iniciado)
                        .map(item => <Table.Row key={item.id}>
                            <Cell><GameMode>{item.modo}</GameMode></Cell>
                            <Cell>
                                <GameSpace item={item}></GameSpace>
                            </Cell>
                            <Cell>{item.owner}</Cell>
                            <Cell>
                                <JoinButton item={item} form={form}/>
                            </Cell>
                        </Table.Row>)}
                </Table.Body>
            </Table.Root>
            <NewGameDialog {...form.dialog}/>
        </Flex>
    }
}

/**
 * @constructor
 */
export function GameList() {
    const [key, setKey] = React.useState(0);

    function onReload() {
        setKey(key => key + 1);
    }

    return <Suspense fallback={<GameListLoader/>}>
        <GameTable fetchItems={fetchGameList({key})} onReload={onReload}/>
    </Suspense>
}