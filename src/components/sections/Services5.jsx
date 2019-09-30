import React, { useState } from 'react';
import { Tabs, Tab, Grid, Icon } from '@material-ui/core';

export default function() {
	const [ value, setValue ] = useState(0);

	const featureList = [
		{
			imageUrl: './assets/images/screenshots/login.jpg',
			title: 'Clean & minimal login UI',
			text: 'Use our cloud based authentication and authorization services, or even port over your own!'
		},
		{
			imageUrl: './assets/images/screenshots/dashboard.jpg',
			title: 'Minimal & smart dashboard',
			text: 'Build your very own dashboard(s) to display and manipulate your companies data'
		},
		{
			imageUrl: './assets/images/screenshots/calendar.jpg',
			title: 'Manage your tasks & project efficiently',
			text: 'Efficient team building is just a click away!.'
		}
	];

	const handleChange = (event, value) => {
		setValue(value);
	};

	const feature = featureList[value];

	return (
		<div className="section section-service5 light-gray" id="service5">
			<div className="container">
				{/* tab view */}
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="standard"
					scrollButtons="auto"
				>
					<Tab label="Login" />
					<Tab label="Dashboard" />
					<Tab label="Calendar" />
				</Tabs>

				<Grid container spacing={4} className="mt-16 fade-in" alignItems="center">
					<Grid item lg={5} md={7} sm={12} xs={12}>
						<div className="service5__image-holder">
							<img className="elevation-3" src={feature.imageUrl} alt="building" />
						</div>
					</Grid>
					<Grid item lg={5} md={7} sm={12} xs={12}>
						<div className="service5__details">
							<h3>{feature.title}</h3>
							<p>{feature.text}</p>

							<a className="text-brand" href="#details">
								View details
								<Icon className="service5__link-icon">navigate_next</Icon>
							</a>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
