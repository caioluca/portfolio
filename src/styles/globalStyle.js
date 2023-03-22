import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}

	html, body, #root {
		width: 100%;
		height: 100%;
	}

	body {
		font-family: 'Poppins', sans-serif;
		background-color: ${({ theme }) => theme.snowStorm.nord4};
		padding: 14px 28px;
	}

	#root {
		display: flex;
		justify-content: center;
	}
`