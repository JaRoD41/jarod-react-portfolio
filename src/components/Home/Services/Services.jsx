import './Services.css'

const Services = ({ services }) => {
	return (
		<section className='services'>
			<h2>What I do</h2>

			{services.map((service, index) => (
				<div key={index} className='service-card'>
					<div className='service-icon'>
						<i className='fas fa-mobile-alt'></i>
					</div>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
				</div>
			))}
		</section>
	)
}

export default Services
