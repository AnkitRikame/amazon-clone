// setup data Layer
// user information in the homepage
// track the basket

import React, { createContext,useContext, useReducer } from "react";



// This is the data
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
 );

//  This is we can use it inside of a component
 export const useStateValue = () => useContext(StateContext);