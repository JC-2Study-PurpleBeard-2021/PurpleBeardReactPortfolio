import Widecard from '../common/Widecard';

export default function Education() {
	return (
		<div className='education'>
			<div className='ContentStateEducation'></div>
			<div className='educationContent'>
				<h1>Education</h1>
				<p>Attended Ecclesbourne School in Derbyshire for my schooling.</p>
				<Widecard
					title='PurpleBeard'
					desc='Web Coding Bootcamp'
					from='Jan 2021 - '
					to='Mar 2021'
				/>
				<Widecard
					title='CIMA'
					desc='Chartership In Accountancy'
					from='2014 - '
					to='2017'
				/>
				<Widecard
					title='Derby University'
					desc='A-Levels (Maths, Physics & Computer Science)'
					from='2001 - '
					to='2003'
				/>
			</div>
		</div>
	);
}
