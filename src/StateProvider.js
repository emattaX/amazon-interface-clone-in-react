import React, { createContext, useContext, useReducer } from "react"

// Prepares the data layer
export const StateContext = createContext()

// Wraps our app and provide data layer to components
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
)

// Pulls the information from the data layer
export const useStateValue = () => useContext(StateContext)