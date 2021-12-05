import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Book-Search-Engine',
			description:
				'Google Books API search engine built in MERN Stack. Other than searching for books, users can sign up and login their account to save their favorive books.',
			image: 'book-search-engine.jpg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku & AWS S3',
				'React.js',
				'MERN Stack',
			],
			github: 'https://github.com/Saiban-Hussein/homwork21',
			deployed: 'https://glacial-ocean-05226.herokuapp.com/',
		},
		{
			name: 'Code-Quiz',
			description:
				'This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data',
			image: 'code-quize.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/Saiban-Hussein/Code-Quiz-Week-4',
			deployed: 'https://saiban-hussein.github.io/Code-Quiz-Week-4/index.html',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that presented with current and future conditions for that city and that city is added to the search history.',
			image: 'weather-dashboard-image.jpg',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Saiban-Hussein/Homework-06',
			deployed: 'https://saiban-hussein.github.io/Homework-06/',
		},
		{
			name: 'Password Generator',
			description:
				'This application emphasizes the use of Javascript to generate a random, secure password for the user.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Saiban-Hussein/Password__Generator',
			deployed: ' https://saiban-hussein.github.io/Password__Generator/',
		},
		{
			name: 'Note Taker',
			description:
				'The goal was to create an application that can be used to write, save, and delete notes. This app uses an express backend and saves and retrieves note data from a JSON file',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/Saiban-Hussein/Homework-week-11',
			deployed: 'https://intense-castle-24254.herokuapp.com/note',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Projects</h1>
			</div>
			<div className="main-div">
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>		
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
