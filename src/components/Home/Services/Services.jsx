import './Services.css'

const Services = ({ services }) => {
	return (
		<section className='services-section'>
			<h2 className='section-title'>What I Do</h2>
			{services.map((service, index) => (
				<div key={index} className='service-card'>
					<div className='service-icon'>
						<i className={service.icon}></i>
					</div>
					<div className='service-content'>
						<h3 className='service-title'>{service.title}</h3>
						<p className='service-description'>{service.description}</p>
					</div>
				</div>
			))}
		</section>
	)
}

export default Services
