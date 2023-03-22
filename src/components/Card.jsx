import React from 'react'
import styled from 'styled-components'

export function Card({ social, link, Icon }) {
	return (
		<Container>
			<Icon />	
			<Label children={link} />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	max-width: 334px;
	display: flex;
	align-items: center;
	gap: 14px;
	border-radius: 24px;
	box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.5), 10px 10px 20px #E5E5E5;
	background-color: ${({ theme }) => theme.light.quartiary};
	padding: 12px 19px;
	cursor: pointer;
	user-select: none;

	&:hover {
		background-color: ${({ theme }) => theme.light.primary};
		transition: 0.3s;
	}
`

const Label = styled.span`
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;

	text-transform: uppercase;

	color: ${({ theme }) => theme.dark.primary};
`