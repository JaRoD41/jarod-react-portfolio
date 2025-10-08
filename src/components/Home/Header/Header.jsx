import './header.css'

const Header = ({ name, title, imgUrl }) => {
	return (
		<>
			<header className='header'>
				<div className='profile-picture'>
					<img src={imgUrl} alt={`${name}'s profile`} />
				</div>
				<h1 className='name'>{name}</h1>
				<p className='title'>{title}</p>
			</header>
		</>
	)
}
export default Header
