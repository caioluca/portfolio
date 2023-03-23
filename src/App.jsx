import React from 'react'
import styled from 'styled-components'

import { Tabs, Header, Cards } from './components'
import { useActions } from './hooks/useActions'


export default function App() {
	const { fetchUserProfile, fetchUserRepos } = useActions()

	React.useEffect(() => {
		fetchUserProfile()
		fetchUserRepos()
	}, [])

	return (
		<Container>
			<Tabs />
			<Header />
			<Cards />
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