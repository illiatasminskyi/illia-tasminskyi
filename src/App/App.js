import { Layout } from '../containers'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Portfolio } from '../pages'

function App() {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='portfolio' element={<Portfolio />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
