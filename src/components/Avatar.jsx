import React from 'react'
import styled from 'styled-components'
import avatar from '../assets/pics/avatar.png'

export function Avatar() {
	return <Picture />
}

const Picture = styled.div.attrs({ draggable: false })`
	position: absolute;
	left: 38px;
	top: 107px;

	background-image: url(${avatar});
	background-position: center;
	background-size: cover;
	width: 200px;
	height: 200px;
	border: 5px solid ${({ theme }) => theme.light.primary};
	border-radius: 50%;
`