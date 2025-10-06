import Header from './components/Header/Header'
import WelcomeCard from './components/WelcomeCard/WelcomeCard'

import './App.css'

function App() {
	return (
		<>
			<div>
				<Header name='Jarod' title='Software Developer' imgUrl='https://avatars.githubusercontent.com/u/10406239?v=4' />
				<WelcomeCard message='Welcome to my portfolio!' />
			</div>
		</>
	)
}

export default App
