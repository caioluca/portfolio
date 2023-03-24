import React from 'react'
import styled from 'styled-components'

import { backgroundPNG } from '../assets'

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
	background-image: url(${backgroundPNG});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 254px;
	border-radius: 24px;

	margin: 16px 12px;
	margin-bottom: 0px;

	@media screen and (max-width: 480px) {
		display: flex;
		justify-content: center;

		min-height: 192px;
	}
`