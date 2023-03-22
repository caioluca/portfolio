import React from 'react'
import styled from 'styled-components'

import { Header, Socials } from './components'

export default function App() {
	return (
		<Container>
			<Header />
			<Socials />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 45px;

	width: 100%;
	max-width: 1024px;
`