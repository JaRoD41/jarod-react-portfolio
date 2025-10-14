import ProjectCard from '../../Shared/ProjectCard/ProjectCard'
import './featuredProjects.css'
import projects from '../../../data/projects.json'

const FeaturedProjects = () => {
	return (
		<section className='featured-projects'>
			<h2 className='section-title'>Featured Projects</h2>
			{projects.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</section>
	)
}
export default FeaturedProjects
