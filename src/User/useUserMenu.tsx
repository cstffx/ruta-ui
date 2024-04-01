import {GameContext, useGameContext} from "../Context/GameContext";
import {postServerReset} from "../API/postServerReset";
import type {ButtonProps} from "@radix-ui/themes";

export function useUserMenu() {
    const context = useGameContext() as GameContext;
    return {
        user: {
            variant: "surface",
            title: "Usuario",
        } as ButtonProps,
        exit: {
            title: "Salir",
            variant: "surface",
            onClick: () => {
                context.logout()
            }
        } as ButtonProps,
        reload: {
            title: "Resetear servidor",
            variant: "surface",
            color: "red",
            onClick: async () => {
                await postServerReset();
                await context.logout();
            }
        } as ButtonProps,
    }
}