import React from 'react'
import styled from 'styled-components'

import { useStore } from '../hooks'

export function PersonalInfo() {
	const { user = {}, darkMode } = useStore()

	return (
		<Container darkMode={darkMode}>
			<InfoLabel children={user?.name} darkMode={darkMode} />
			<InfoLabel children={user?.company} darkMode={darkMode} />
			<InfoLabel children={user?.location} darkMode={darkMode} />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;

	& > span:first-child {
		font-weight: 500;
		font-size: 22px;
		line-height: 33px;
		color: ${({ theme, darkMode }) => !!darkMode ? theme.snowStorm.nord6 : theme.polarNight.nord3};
	}
`

const InfoLabel = styled.span`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme, darkMode }) => darkMode ? theme.frost.nord9 : theme.frost.nord7};
`