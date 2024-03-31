import React from "react";

export async function fetchSessionStatus(){
    return new Promise<boolean>(resolve => {
        setTimeout(resolve, 5000);
    });
}

export function useLogin() {
    return {
        submit: {}
    }
}