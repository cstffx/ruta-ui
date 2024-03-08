import "./style.css"

import React from 'react';
import {Card as RadixCard} from "@radix-ui/themes";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";

export function Card(){
    return <RadixCard className="Card" variant="surface">
        <CardTitle/>
        <CardContent/>
    </RadixCard>
}