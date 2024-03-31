import React, {Suspense} from "react";
import {Table} from "@radix-ui/themes";
import {EmptyTableBody} from "./EmptyTableBody";

/**
 * @constructor
 */
export function GameListBody() {
    return <Table.Body>
        <EmptyTableBody/>
    </Table.Body>
}