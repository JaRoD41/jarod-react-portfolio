import { useState } from 'react'
import NavBar from './components/Shared/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import './App.css'

const App = () => {
	const [activeTab, setActiveTab] = useState('home')

	return (
		<div className='app-container'>
			<main className='main-content'>
				{activeTab === 'home' && <Home />}
				{activeTab === 'about' && <About />}
				{activeTab === 'work' && <Work />}
				{activeTab === 'contact' && <Contact />}
			</main>
			<NavBar activeTab={activeTab} onTabChange={setActiveTab} />
		</div>
	)
}

export default App
