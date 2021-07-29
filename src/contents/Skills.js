import Widecard from '../common/Widecard';

export default function Skills() {
	// const myskills = ['HTML', 'CSS', 'JS'];
	return (
		<div className='skills'>
			<div className='ContentStateSkills'></div>
			<div className='skillsContent'>
				<h1>Skills</h1>
				<br />
				{/* <ul>
					{myskills.map((skill) => {
						return <li>{skill}</li>;
					})}
				</ul> */}
				<Widecard
					title='Skills Held for 15 Years'
					desc='Accounting principles, Qlikview BI Development, VBA used in Excel'
				/>
				<Widecard
					title='Skills Held for 4 Years'
					desc='HTML, CSS, Javascript, JQuery, SQL Server, T-SQL, Visual Studio Suite (SSAS, SSRS, SSIS)'
				/>
				<Widecard
					title='Skills Held for 1 Year'
					desc='C#, Bootstrap & SASS, React.js, Git and Github'
				/>
			</div>
		</div>
	);
}
