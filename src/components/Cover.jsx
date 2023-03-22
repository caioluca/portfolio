import React from 'react'
import styled from 'styled-components'

import background from '../assets/pics/background.png'

import { Avatar } from './'

export function Cover() {
	return (
		<Container>
			<Avatar />
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	background-image: url(${background});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 254px;
	border-radius: 24px;

	margin: 16px 12px;
	margin-bottom: 0px;
`