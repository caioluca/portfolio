import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from '../styles'
import { ContextProvider } from './context'

export default function Providers({ children }) {
	return (
		<ContextProvider>
			<ThemeProvider theme={defaultTheme}>
				{children}
				<GlobalStyle />
			</ThemeProvider>
		</ContextProvider>
	)
}