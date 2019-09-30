import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Button, Icon } from '@material-ui/core';

export default function Services1() {
	const serviceList = [
		{
			icon: 'dashboard',
			title: 'Business Application',
			text: 'Fast, modern, and responsive applications to handle your business needs.'
		},
		{
			icon: 'perm_data_setting',
			title: 'Custom System Integration',
			text: 'Combine all of your Api data into a single cloud data-source.'
		},
		{
			icon: 'storage',
			title: 'Database Administration',
			text: 'Use our Database services to store your company data securely in the cloud.'
		},
		{
			icon: 'stay_primary_portrait',
			title: 'Custom Mobile Application',
			text: 'Take your business to the next level with your very own cross-platform native mobile application.'
		}
	];

	return (
		<section className="section section-service1 light-gray" id="service3">
			<div className="container">
				<div className="section__header">
					<h2>Our Services</h2>
					<p>Wizebase offers all the technologies you need to advertise your company to the world!</p>
				</div>

				<Grid container spacing={1} alignContent="stretch">
					{serviceList.map((service) => (
						<Grid item md={3} sm={6} key={service.title}>
							<Card className="service1__card service__card card">
								<CardContent className="service1__card__content">
									<div>
										<div className="text-center mb-16">
											<Icon className="card__icon-64">{service.icon}</Icon>
										</div>
										<h3 className="font-light">{service.title}</h3>
										<p>{service.text}</p>
									</div>
									<div className="pt-16">
										<Button>READ MORE</Button>
									</div>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</section>
	);
}
