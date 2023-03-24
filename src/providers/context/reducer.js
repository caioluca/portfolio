import { TYPES } from './types'

import { DiscordSVG, GithubSVG, LinkedInSVG, TwitterSVG } from '../../assets'

export const initialState = {
	user: {}, 
	darkMode: true, 
	currentTab: 'Link Tree', 
	repos: [], 
	socials: [
		{ name: 'github', link: 'https://github.com/caioluca', Icon: GithubSVG }, 
		{ name: 'linkedin', link: 'https://www.linkedin.com/', Icon: LinkedInSVG }, 
		{ name: 'discord', link: 'https://discordapp.com/users/592864138863312918', Icon: DiscordSVG }, 
		{ name: 'twitter', link: 'https://twitter.com/caioluca__', Icon: TwitterSVG }, 
	]
}

export function reducer(state, action) {
	const { type, payload } = action

	switch (type) {
		case TYPES.FETCH_USER_PROFILE:
			
			return { ...state, user: payload }

		case TYPES.FETCH_USER_REPOS:
			
			return { ...state, repos: payload }
 
		case TYPES.TOGGLE_THEME:

			return { ...state, darkMode: !state?.darkMode }

		case TYPES.SET_CURRENT_TAB:

			return { ...state, currentTab: payload }
	
		default:
			return state
	}
}