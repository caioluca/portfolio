import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/defaultTheme'
import { GlobalStyle } from '../styles/globalStyle'

export default function Providers({ children }) {
	return (
		<ThemeProvider theme={defaultTheme}>
			{children}
			<GlobalStyle />
		</ThemeProvider>
	)
}