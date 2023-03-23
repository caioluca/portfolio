import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from '../styles'
import { ContextProvider } from './context'

export function Providers({ children }) {
	return (
		<ContextProvider>
			<ThemeProvider theme={defaultTheme}>
				{children}
				<GlobalStyle />
			</ThemeProvider>
		</ContextProvider>
	)
}