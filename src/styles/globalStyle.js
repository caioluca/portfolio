import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		height: 100%;
		font-family: 'Poppins', sans-serif;
	}

	#root {
		min-height: 100%;
		display: flex;
		justify-content: center;
	}
`