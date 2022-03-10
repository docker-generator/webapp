import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import AppRoutes from 'routes'
import { GlobalStyles } from 'styles'
import { HashRouter } from 'react-router-dom';
import { MainProvider } from 'stores'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<MainProvider>
				<AppRoutes />
				<GlobalStyles />
			</MainProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
