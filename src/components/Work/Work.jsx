import WorkIntro from './WorkIntro/WorkIntro'
import FeaturedProjects from './FeaturedProjects/FeaturedProjects'
import GitHubCTA from './GitHubCTA/GitHubCTA'

const Work = () => {
	return (
		<div className='work'>
			<WorkIntro />
			<FeaturedProjects />
			<GitHubCTA />
		</div>
	)
}
export default Work
