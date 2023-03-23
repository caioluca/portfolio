import React from 'react'
import styled from 'styled-components'

import { Tabs, Header, Cards } from './components'
import { useActions, useStore } from './hooks'


export default function App() {
	const { fetchUserProfile, fetchUserRepos } = useActions()
	const { darkMode } = useStore()

	React.useEffect(() => {
		fetchUserProfile()
		fetchUserRepos()
	}, [])

	return (
		<Container darkMode={darkMode}>
			<Content>
				<Tabs />
				<Header />
				<Cards />
			</Content>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: center;

	width: 100%;

	background-color: ${({ theme, darkMode }) => !!darkMode ? theme.polarNight.nord0 : theme.snowStorm.nord4};
	padding: 20px 28px;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 45px;

	width: 100%;
	max-width: 1024px;
`