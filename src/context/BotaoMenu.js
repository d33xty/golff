import { createContext, useState } from "react";

export const botaoMenuContexto = createContext();
export function BotaoMenuProvider({children}){
    const [ativo, SetAtivo] = useState(false)
    return(
        <botaoMenuContexto.Provider value={{ativo,SetAtivo}}>
            {children}
        </botaoMenuContexto.Provider>
    )
}