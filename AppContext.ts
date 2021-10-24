import React from "react";

const context = {
    songId: null,
    setSongUd: (id: string) => { }
}

export const AppContext = React.createContext(context);