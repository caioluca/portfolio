import { useContext } from 'react'
import { Context, TYPES } from '../providers/context'

import { api } from '../services'

export function useActions() {
	const { dispatch } = useContext(Context)

	async function fetchUserProfile(){
		try {
			const response = await api.get('/users/caioluca')
			const { data } = response
			

			dispatch({ type: TYPES.FETCH_USER_PROFILE, payload: data })
		} catch (error) {
			console.log({ error })
		}
	}

	function toggleTheme(){
		dispatch({ type: TYPES.TOGGLE_THEME })
	}

	return {
		fetchUserProfile, 
		toggleTheme, 
	}
}