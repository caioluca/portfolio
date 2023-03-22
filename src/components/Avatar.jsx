import React from 'react'
import styled from 'styled-components'

import { useStore } from '../hooks'

export function Avatar() {
	const { user = {} } = useStore()

	return <Picture url={user?.avatar_url} />
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
	border: 5px solid ${({ theme }) => theme.snowStorm.nord6};
	border-radius: 50%;
`