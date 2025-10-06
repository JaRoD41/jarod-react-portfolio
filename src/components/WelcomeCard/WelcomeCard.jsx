import './WelcomeCard.css'

const WelcomeCard = ({ message }) => {
	return (
		<div className='welcome-card'>
			<p>{message}</p>
		</div>
	)
}

export default WelcomeCard
