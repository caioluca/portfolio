import { TYPES } from './types'

export const initialState = {
	user: {},
	darkMode: true
}

export function reducer(state, action) {
	const { type, payload } = action

	switch (type) {
		case TYPES.FETCH_USER_PROFILE:
			
			return { ...state, user: payload }
 
		case TYPES.TOGGLE_THEME:

			return { ...state, darkMode: !state?.darkMode }
	
		default:
			return state
	}
}