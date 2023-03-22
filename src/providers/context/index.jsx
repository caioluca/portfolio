import React, { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

export { initialState, reducer } from './reducer'
export { TYPES } from './types'

export const Context = createContext(initialState)

export function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const stateValue = { ...state, dispatch }

	return (
		<Context.Provider value={stateValue}>
			{children}
		</Context.Provider>
	)
}