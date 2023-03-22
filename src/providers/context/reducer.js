import { TYPES } from './types'

export const initialState = {
	user: {}
}

export function reducer(state, action) {
	const { type, payload } = action

	switch (type) {
		case TYPES.FETCH_USER_PROFILE:
			
			return { ...state, user: payload }
	
		default:
			return state
	}
}