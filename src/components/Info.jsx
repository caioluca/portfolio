import React from 'react'
import styled from 'styled-components'

import { PersonalInfo, ContactInfo } from './'

export function Info() {
	return (
		<Container>
			<PersonalInfo />
			<ContactInfo />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	margin: 23px 34px;
	margin-top: 0px;
`