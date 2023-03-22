import React from 'react'
import styled from 'styled-components'

import { Cover, Info } from './'

export function Header() {
	return (
		<Container>
			<Cover />
			<Info />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	min-height: 457px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 21px;
	border-radius: 24px;
	background-color: ${({ theme }) => theme.snowStorm.nord6};
	box-shadow: -10px -10px 20px ${({ theme }) => `${theme.polarNight.nord3}05`}, 10px 10px 20px ${({ theme }) => `${theme.polarNight.nord3}05`};
`