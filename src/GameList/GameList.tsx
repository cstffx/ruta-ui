import React, {Suspense} from "react";
import {GameListLoader} from "./GameListLoader";
import {GameTable} from "./GameTable";
import {clearGameListCache, fetchGameList} from "../API/fetchGameList";
import {useFetcher} from "../API/useFetcher";

/**
 * @constructor
 */
export function GameList() {

    const fetchItem = useFetcher(fetchGameList, clearGameListCache);

    return <Suspense fallback={<GameListLoader/>}>
        <GameTable fetchItems={fetchItem.promise}
                   onReload={fetchItem.refresh}/>
    </Suspense>
}