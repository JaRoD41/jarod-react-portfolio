import './navBar.css'

const NavBar = ({ activeTab, onTabChange }) => {
	const tabs = [
		{ id: 'home', label: 'Home', icon: 'fas fa-home' },
		{ id: 'about', label: 'About', icon: 'fas fa-user' },
		{ id: 'work', label: 'Work', icon: 'fas fa-briefcase' },
		{ id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
	]

	return (
		<nav className='navbar'>
			{tabs.map((tab) => (
				<button
					key={tab.id}
					className={`navbar-item ${activeTab === tab.id ? 'active' : ''}`}
					onClick={() => onTabChange(tab.id)}
				>
					<i className={tab.icon}></i>
					<span>{tab.label}</span>
				</button>
			))}
		</nav>
	)
}

export default NavBar
