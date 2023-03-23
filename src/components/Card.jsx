import React from 'react'
import styled from 'styled-components'

import { useStore } from '../hooks'

export function Card({ social, link, Icon }) {
	const { darkMode } = useStore()

	return (
		<Container darkMode={darkMode}>
			<Icon />	
			<Label children={link} darkMode={darkMode} />
		</Container>
	)
}

const CardContainer = styled.div`
	width: 100%;
	max-width: 334px;
	display: flex;
	align-items: center;
	gap: 14px;
	border-radius: 24px;
	box-shadow: -10px -10px 20px ${({ theme }) => `${theme.polarNight.nord3}05`}, 10px 10px 20px ${({ theme }) => `${theme.polarNight.nord3}05`};
	background-color: ${({ theme, darkMode }) => !!darkMode ? theme.polarNight.nord1 : theme.snowStorm.nord5};
	padding: 12px 19px;
	cursor: pointer;
	user-select: none;

	transition: 0.2s;

	&:hover {
		background-color: ${({ theme, darkMode }) => !!darkMode ? theme.polarNight.nord3 : theme.snowStorm.nord6};
		transition: 0.2s;
		transform: scale(1.1);
	}
`

const Label = styled.span`
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;

	text-transform: uppercase;

	color: ${({ theme, darkMode }) => !!darkMode ? theme.snowStorm.nord4 : theme.polarNight.nord1};
	transition: 0.2s;
`