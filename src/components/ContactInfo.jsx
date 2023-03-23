import React from 'react'
import styled from 'styled-components'

import { MailSVG, DarkMailSVG, PhoneSVG, DarkPhoneSVG } from '../assets'

import { useStore } from '../hooks'

export function ContactInfo() {
	const { darkMode } = useStore()

	return (
		<Container>
			<InfoContainer>
				{!!darkMode ? <MailSVG /> : <DarkMailSVG />}
				<InfoLabel children='caioluca.job@gmail.com' darkMode={darkMode} />
			</InfoContainer>
			<InfoContainer>
				{!!darkMode ? <PhoneSVG /> : <DarkPhoneSVG />}
				<InfoLabel children='+055 (11) 98338-8646' darkMode={darkMode} />
			</InfoContainer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 17px;
`

const InfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const InfoLabel = styled.span`
	font-weight: 300;
	font-size: 12px;
	line-height: 18px;
	color: ${({ theme, darkMode }) => !!darkMode ? theme.snowStorm.nord6 : theme.polarNight.nord3};
`
