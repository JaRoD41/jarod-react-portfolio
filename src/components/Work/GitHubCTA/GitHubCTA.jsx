import './githubCTA.css'

const GitHubCTA = () => {
	return (
		<section className='github-cta'>
			<div className='github-card'>
				<div className='github-icon'>
					<i className='fas fa-code'></i>
				</div>
				<h3>Want to see more?</h3>
				<p>Check out my GitHub profile for more projects and contributions.</p>
				<a href='#' className='github-link'>
					<i className='fab fa-github'></i> View GitHub
				</a>
			</div>
		</section>
	)
}
export default GitHubCTA
