import React from 'react'
import styled from 'styled-components'

import { Card } from './'

import { ReactComponent as Discord } from '../assets/icons/discord.svg'

const socials = [
	{ social: 'discord', link: 'discord', Icon: Discord },
	{ social: 'github', link: 'github', Icon: Discord },
	{ social: 'spotify', link: 'spotify', Icon: Discord },
	{ social: 'twitch', link: 'twitch', Icon: Discord },
	{ social: 'twitter', link: 'twitter', Icon: Discord },
	{ social: 'youtube', link: 'youtube', Icon: Discord }
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