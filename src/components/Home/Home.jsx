import Header from './Header/Header'
import WelcomeCard from './WelcomeCard/WelcomeCard'
import Services from './Services/Services'
import services from '../../data/services.json'

const Home = () => {
	return (
		<div className='home'>
			<Header name='Jarod' title='Full Stack Developer' imgUrl='https://avatars.githubusercontent.com/u/10406206?v=4' />
			<WelcomeCard message='Hello, I am Jarod, a Full Stack Developer' />
			<Services services={services} />
		</div>
	)
}
export default Home
