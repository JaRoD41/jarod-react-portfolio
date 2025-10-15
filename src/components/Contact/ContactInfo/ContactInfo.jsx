import contactMethods from '../../../data/contactMethods.json'

const ContactInfo = () => {
	return (
		<section className='contact-info-section'>
			<h2 className='section-title'>Contact Information</h2>
			{contactMethods.map((method) => (
				<a key={method.id} href={method.link} target='_blank' rel='noopener noreferrer' className='contact-card'>
					<div className='contact-method'>
						<div className='contact-icon'>
							<i className={method.icon}></i>
						</div>
						<div className='contact-info'>
							<h3>{method.type}</h3>
							<p>{method.value}</p>
						</div>
						<i className='fas fa-chevron-right contact-arrow'></i>
					</div>
				</a>
			))}
		</section>
	)
}
export default ContactInfo
