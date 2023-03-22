import React from 'react'
import styled from 'styled-components'

import { useStore } from '../hooks'

export function PersonalInfo() {
	const { user = {} } = useStore()

	return (
		<Container>
			<InfoLabel children={user?.name} />
			<InfoLabel children={user?.company} />
			<InfoLabel children={user?.location} />
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
		color: ${({ theme }) => theme.polarNight.nord3};
	}
`

const InfoLabel = styled.span`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.frost.nord7};
`