import "./style.css"

import React from 'react';
import {Card} from "@radix-ui/themes";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";

export function LoginCard(){
    return <Card size="2" className="Card" variant="surface">
        <CardTitle/>
        <CardContent/>
    </Card>
}