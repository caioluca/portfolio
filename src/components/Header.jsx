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
	height: 457px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 21px;
	border-radius: 24px;
	background-color: ${({ theme }) => theme.light.primary};
	box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.5), 10px 10px 20px #E5E5E5;
`