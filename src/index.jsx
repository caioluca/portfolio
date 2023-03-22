import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Providers from './providers'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
	<StrictMode>
		<Providers>
			<App />
		</Providers>
	</StrictMode>
)
