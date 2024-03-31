import React, {Suspense} from "react";
import type {GameInfo} from "../../API/fetchGameList";
import {fetchGameList} from "../../API/fetchGameList";
import {AppLoader} from "../Loader/AppLoader";
import {Table} from "@radix-ui/themes";
import {GameListBody} from "./GameListBody";
import {EmptyTableBody} from "./EmptyTableBody";

interface GameTableProps {
    fetchItems: any
}

export function GameTable(props: GameTableProps) {
    const items = props.fetchItems() as GameInfo[];
    if (!items.length) {
        return <EmptyTableBody/>
    } else {
        return <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Usuario</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Modo</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Jugadores</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Suspense fallback={<>Cargando</>}>
                    <GameListBody/>
                </Suspense>
            </Table.Body>
        </Table.Root>
    }
}

/**
 * @constructor
 */
export function GameList() {
    return <Suspense fallback={<AppLoader/>}>
        <GameTable fetchItems={fetchGameList}/>
    </Suspense>
}