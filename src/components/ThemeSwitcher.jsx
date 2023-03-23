import React from 'react'
import styled from 'styled-components'

import { MoonSVG, SunSVG } from '../assets'

import { useStore, useActions } from '../hooks'

export function ThemeSwitcher() {
	const { toggleTheme } = useActions()
	const { darkMode } = useStore()

	return (
		<Container onClick={() => toggleTheme()}>
			{!!darkMode ? <MoonSVG /> : <SunSVG />}
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 30px;
	height: 30px;
	cursor: pointer;
`