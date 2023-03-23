import { TYPES } from './types'
import { DiscordSVG } from '../../assets'

export const initialState = {
	user: {}, 
	darkMode: true, 
	currentTab: 'Link Tree', 
	repos: [], 
	socials: [
		{ name: 'discord', link: 'https://discordapp.com/users/592864138863312918', Icon: DiscordSVG }, 
		{ name: 'github', link: 'https://github.com/caioluca', Icon: DiscordSVG }, 
		{ name: 'spotify', link: 'https://open.spotify.com/user/wood6zh5x6dvo1uxhgmiulyw9/following', Icon: DiscordSVG }, 
		{ name: 'twitch', link: 'https://www.twitch.tv/caioluca__', Icon: DiscordSVG }, 
		{ name: 'twitter', link: 'https://twitter.com/caioluca__', Icon: DiscordSVG }, 
		{ name: 'youtube', link: 'https://www.youtube.com/@caioluca__', Icon: DiscordSVG }, 
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