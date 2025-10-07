import { useState } from 'react'

import Header from './components/Header/Header'
import WelcomeCard from './components/WelcomeCard/WelcomeCard'
import Services from './components/Services/Services'
import NavBar from './components/NavBar/NavBar'

import './App.css'

const App = () => {
	const [activeTab, setActiveTab] = useState('home')

	const services = [
		{
			title: 'Web Development',
			description: 'I have experience with React, Next.js, and Gatsby.',
		},
		{
			title: 'Data Science',
			description: 'I have experience with Python, SQL, and MongoDB.',
		},
		{
			title: 'UI/UX Design',
			description: 'I have experience with Figma, Sketch, and Adobe XD.',
		},
	]
	return (
		<>
			<div className='app'>
				<Header name='Jarod' title='Software Developer' imgUrl='https://avatars.githubusercontent.com/u/10406239?v=4' />
				<main className='main-content'>
					<WelcomeCard message='Welcome to my portfolio!' />
					<Services services={services} />
				</main>

				<NavBar activeTab={activeTab} onTabChange={setActiveTab} />
			</div>
		</>
	)
}

export default App
