import React from 'react';
import dp from '../img/ProfilePicture1.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../common/social';

const Home = () => {
	return (
		<main className='contents'>
			<div className='ContentStateHome'></div>
			<div className='homeContent'>
				<h1 className='HomeText'>Portfolio Project</h1>
				<h3 className='HomeText'>PurpleBeard</h3>
				<img src={dp} alt='justin heath' />
				{/* <div id='typeEffect'>
					<ReactTypingEffect text={'Justin Heath'} />
				</div> */}
				<h1 className='NameText'>Justin Heath</h1>
				<Social />
			</div>
		</main>
	);
};

export default Home;
