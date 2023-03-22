import React from 'react'
import styled from 'styled-components'

export function PersonalInfo() {
	return (
		<Container>
			<InfoLabel children='Caio Luca' />
			<InfoLabel children='Software Engineer' />
			<InfoLabel children='São Paulo, Brazil' />
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
		color: ${({ theme }) => theme.dark.secondary};
	}
`

const InfoLabel = styled.span`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.dark.quartiary};
`