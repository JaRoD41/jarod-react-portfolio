import './projectCard.css'

const ProjectCard = ({ project }) => {
	return (
		<div className='project-card'>
			<div className='project-header'>
				<h3>{project.title}</h3>
				<span className={`project-status ${project.status === 'Live' ? 'live' : 'dev'}`}>{project.status}</span>
			</div>
			<div className='project-type'>
				<i className='fas fa-laptop-code'></i>
				<span>{project.type}</span>
			</div>
			<p className='project-description'>{project.description}</p>
			<div className='project-technologies'>
				{project.technologies.map((tech) => (
					<span key={tech} className='tech-badge'>
						{tech}
					</span>
				))}
			</div>
			{project.link && (
				<a href={project.link} className='project-link'>
					<i className='fas fa-external-link-alt'></i> View Project
				</a>
			)}
		</div>
	)
}
export default ProjectCard
