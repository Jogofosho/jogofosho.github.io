import React from 'react';
import NameField from '../Components/NameField'
import HomePageCard from '../Components/HomePageCard';
import Navigation from '../Components/Navigation';

const HomePage = () => {
	return (
		<div className="App">
			<HomePageCard>
				<NameField name="Joseph Gonzales" />
				<p>
					Hello! You can call me Joe if you'd like.
				</p>
				<p>
					I'm a 4th year computer science student at the University of Manitoba.
					I'm also a big sports guy, I enjoy practicing yoga, and I love checking out new restaurants.
				</p>
				<p>
					Thanks for stopping by!
				</p>
				<Navigation />
			</HomePageCard>
		</div>
	)
}

export default HomePage
