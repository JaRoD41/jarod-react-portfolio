import './experience.css'
import experiences from '../../../data/experiences.json'

const Experience = () => {
	return (
		<section className='experience-section'>
			<h2 className='section-title'>Experience</h2>
			{experiences.map((exp) => (
				<div key={exp.title} className='experience-card'>
					<div className='experience-header'>
						<i className='fas fa-briefcase'></i>
						<div>
							<h3>{exp.title}</h3>
							<p className='company'>
								{exp.company} • {exp.period}
							</p>
						</div>
					</div>
					<p className='experience-description'>{exp.description}</p>
				</div>
			))}
		</section>
	)
}
export default Experience
