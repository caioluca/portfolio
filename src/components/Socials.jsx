import React from 'react'
import styled from 'styled-components'

import { Card } from './'

import { discordSVG } from '../assets'

const socials = [
	{ social: 'discord', link: 'discord', Icon: discordSVG },
	{ social: 'github', link: 'github', Icon: discordSVG },
	{ social: 'spotify', link: 'spotify', Icon: discordSVG },
	{ social: 'twitch', link: 'twitch', Icon: discordSVG },
	{ social: 'twitter', link: 'twitter', Icon: discordSVG },
	{ social: 'youtube', link: 'youtube', Icon: discordSVG }
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