export default function Contact() {
	return (
		<div className='contact'>
			<div className='ContentStateContact'></div>
			<div className='contactContent'>
				<h1>Contact</h1>
				<br />
				<input placeholder='Name' />
				<input placeholder='email' />
				<textarea placeholder='Message..'></textarea>
				<button type='submit'>Send Message</button>
			</div>
		</div>
	);
}
