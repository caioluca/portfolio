import React from 'react'
import styled from 'styled-components'

import { avatarPNG } from '../assets'

export function Avatar() {

	return <Picture url={avatarPNG} />
}

const Picture = styled.div.attrs({ draggable: false })`
	position: absolute;
	left: 38px;
	top: 107px;

	background-image: url(${({ url }) => url});
	background-position: center;
	background-size: cover;
	width: 200px;
	height: 200px;
	border: 5px solid ${({ theme, darkMode }) => !!darkMode ? theme.polarNight.nord1 : theme.snowStorm.nord6};
	border-radius: 50%;
	transition: 0.2s;

	@media screen and (max-width: 480px) {
		position: relative;
		left: 0;

		width: 150px;
		height: 150px;
	}
`