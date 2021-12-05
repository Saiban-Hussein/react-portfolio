import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/Saiban.png')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hello, I am Saiban and I am a full stack web developer. I recently finished 
					a six months full stack web development program from the
					Southern Methodist University bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design.
				</p>
			</div>
		</section>
	);
}

export default About;
