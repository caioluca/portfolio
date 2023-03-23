import React from 'react'
import styled from 'styled-components'

import { Card } from './'

import { DiscordSVG } from '../assets'

const socials = [
	{ social: 'discord', link: 'discord', Icon: DiscordSVG },
	{ social: 'github', link: 'github', Icon: DiscordSVG },
	{ social: 'spotify', link: 'spotify', Icon: DiscordSVG },
	{ social: 'twitch', link: 'twitch', Icon: DiscordSVG },
	{ social: 'twitter', link: 'twitter', Icon: DiscordSVG },
	{ social: 'youtube', link: 'youtube', Icon: DiscordSVG }
]

export function Socials() {
	return (
		<Container>
			{socials?.map((social, index) => <Card key={index} {...social} />)}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 842px;
	justify-content: space-between;
	row-gap: 21px;
`