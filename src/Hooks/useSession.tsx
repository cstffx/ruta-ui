import React from "react";

interface SessionToken {
    username: string;
}

/**
 * Retorna información de la sesión del usuario.
 */
export function useSession(){
    const juego = useSession();
    const [session, setSession] = React.useState<SessionToken|null>(null);

    return {
        close: () => {
            setSession(null);
        },
        
        isAnonimous() {
            return null == session;
        }
    }
}