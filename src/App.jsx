import React from 'react'
import styled from 'styled-components'

import { Header, Socials, ThemeSwitcher } from './components'
import { useActions } from './hooks/useActions'


export default function App() {
	const { fetchUserProfile } = useActions()

	React.useEffect(() => {
		fetchUserProfile()
	}, [])

	return (
		<Container>
			<Header />
			<Socials />
			<ThemeSwitcher />
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 45px;

	width: 100%;
	max-width: 1024px;
`