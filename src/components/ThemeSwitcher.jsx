import React from 'react'
import styled, { useTheme } from 'styled-components'

import { MoonSVG, SunSVG } from '../assets'

import { useStore, useActions } from '../hooks'

export function ThemeSwitcher() {
	const { toggleTheme } = useActions()
	const { darkMode } = useStore()
	const theme = useTheme()

	return (
		<Container onClick={() => toggleTheme()}>
			{!!darkMode ? <SunSVG fill={theme.snowStorm.nord6} /> : <MoonSVG fill={theme.polarNight.nord3} />}
		</Container>
	)
}

const Container = styled.div`
	right: 0;
	bottom: 0;
	width: 30px;
	height: 30px;
	cursor: pointer;
`