import React from 'react'
import styled from 'styled-components'

import { ThemeSwitcher } from './'

import { useStore, useActions } from '../hooks'

export function Tabs() {
	const { setCurrentTab } = useActions()
	const { currentTab } = useStore()
	const { darkMode } = useStore()

	return (
		<Container>
			<TabsContainer>
				<Tab 
					children='Link Tree' 
					darkMode={darkMode} 
					active={currentTab === 'Link Tree'} 
					onClick={() => setCurrentTab('Link Tree')} 
				/>

				<Tab 
					children='Projects' 
					darkMode={darkMode} 
					active={currentTab === 'Projects'} 
					onClick={() => setCurrentTab('Projects')} 
				/>
			</TabsContainer>

			<ThemeSwitcher />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
`

const TabsContainer = styled.div``

const Tab = styled.span`
	padding: 15px;
	padding-top: 0;
	border-bottom: 3px solid ${({ theme, darkMode, active }) => active ? (!!darkMode ? theme.snowStorm.nord6 : theme.polarNight.nord3) : 'transparent'};
	color: ${({ theme, darkMode }) => !!darkMode ? theme.snowStorm.nord6 : theme.polarNight.nord3};
	transition: 0.2s;
	cursor: pointer;
	user-select: none;
`