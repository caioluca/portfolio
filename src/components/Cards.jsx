import React from 'react'
import styled from 'styled-components'

import { useStore } from '../hooks'

import {
	DiscordSVG, 
	DarkDiscordSVG, 
	GithubSVG, 
	DarkGithubSVG, 
	LinkedInSVG, 
	DarkLinkedInSVG, 
	TwitterSVG, 
	DarkTwitterSVG, 
} from '../assets'

export function Cards() {
	const { currentTab, socials, repos } = useStore()

	return (
		<Container>
			{(currentTab === 'Link Tree' ? socials : repos)?.map((social, index) => <Card key={index} {...social} />)}
		</Container>
	)
}

function Icon({ name, darkMode }) {
	switch (name) {
		case 'github':
			return !!darkMode ? <GithubSVG /> : <DarkGithubSVG />

		case 'linkedin':
			return !!darkMode ? <LinkedInSVG /> : <DarkLinkedInSVG />

		case 'discord':
			return !!darkMode ? <DiscordSVG /> : <DarkDiscordSVG />

		case 'twitter':
			return !!darkMode ? <TwitterSVG /> : <DarkTwitterSVG />
	
		default:
			return !!darkMode ? <GithubSVG /> : <DarkGithubSVG />
	}
}

function Card({ name, link }) {
	const { darkMode } = useStore()

	function handleNavigate() {
		window.open(link, '_blank')
	}

	return (
		<CardContainer darkMode={darkMode} onClick={handleNavigate}>
			<Icon name={name} darkMode={darkMode} />
			<Label children={name} darkMode={darkMode} />
		</CardContainer>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 842px;
	justify-content: space-between;
	row-gap: 28px;
`

const CardContainer = styled.div`
	width: 100%;
	max-width: 334px;
	display: flex;
	align-items: center;
	gap: 14px;
	border-radius: 24px;
	box-shadow: -10px -10px 20px ${({ theme }) => `${theme.polarNight.nord3}05`}, 10px 10px 20px ${({ theme }) => `${theme.polarNight.nord3}05`};
	background-color: ${({ theme, darkMode }) => !!darkMode ? theme.polarNight.nord1 : theme.snowStorm.nord5};
	padding: 16px 23px;
	cursor: pointer;
	user-select: none;

	transition: 0.2s;

	&:hover {
		background-color: ${({ theme, darkMode }) => !!darkMode ? theme.polarNight.nord3 : theme.snowStorm.nord6};
		transition: 0.2s;
		transform: scale(1.1);
	}

	@media screen and (max-width: 768px) {
		max-width: none;

		&:hover {
			transform: scale(1.05);
		}
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