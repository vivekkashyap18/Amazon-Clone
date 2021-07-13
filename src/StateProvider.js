import React, { createContext, useContext, useReducer } from "react";

//Prepares the data layer
export const StateContext = createContext();

//Wrap the app and provides to data layer
export const StateProvider = ({Reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(Reducer, initialState)}>
        {children}
    </StateContext.Provider>    
);

//Pull the information from the data layer
export const useStateValue = () => useContext(StateContext);