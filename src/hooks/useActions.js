import { useContext } from 'react'
import { Context, TYPES } from '../providers/context'

import { api } from '../services'

import { GithubSVG } from '../assets'

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

	async function fetchUserRepos(){
		try {
			const response = await api.get('/users/caioluca/repos')
			const { data } = response
			

			dispatch({
				type: TYPES.FETCH_USER_REPOS, 
				payload: data.map(({ html_url, ...rest }) => ({ ...rest, link: html_url, Icon: GithubSVG }))
			})

		} catch (error) {
			console.log({ error })
		}
	}

	function toggleTheme(){
		dispatch({ type: TYPES.TOGGLE_THEME })
	}

	function setCurrentTab(currentTab){
		dispatch({ type: TYPES.SET_CURRENT_TAB, payload: currentTab })
	}

	return {
		fetchUserProfile, 
		fetchUserRepos, 
		toggleTheme, 
		setCurrentTab, 
	}
}