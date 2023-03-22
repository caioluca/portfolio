import React from 'react'
import styled from 'styled-components'

import { ReactComponent as MailIcon } from '../assets/icons/mail-icon.svg'
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-icon.svg'

export function ContactInfo() {
	return (
		<Container>
			<InfoContainer>
				<MailIcon />
				<InfoLabel children='caioluca.job@gmail.com' />
			</InfoContainer>
			<InfoContainer>
				<PhoneIcon />
				<InfoLabel children='+055 (11) 98338-8646' />
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
	color: ${({ theme }) => theme.polarNight.nord3};
`