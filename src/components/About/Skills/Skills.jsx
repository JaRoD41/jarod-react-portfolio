import './skills.css'
import skills from '../../../data/skills.json'

const Skills = () => {
	return (
		<section className='skills-section'>
			<h2 className='section-title'>Skills & Expertise</h2>
			{skills.map((skill) => (
				<div key={skill.name} className='skill-item'>
					<div className='skill-header'>
						<i className='fas fa-code'></i>
						<span>{skill.name}</span>
						<span className='skill-level'>{skill.level}%</span>
					</div>
					<div className='skill-bar'>
						<div className='skill-progress' style={{ width: `${skill.level}%` }}></div>
					</div>
				</div>
			))}
		</section>
	)
}
export default Skills
