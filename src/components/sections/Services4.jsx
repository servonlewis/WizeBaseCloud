import React from 'react';
import { Grid, Card, Icon, Button } from '@material-ui/core';

export default function Service4() {
	const cardList = [
		{
			icon: 'alarm',
			title: 'Modern Technology',
			text: 'Beautiful, modern and fast cloud-based applications.'
		},
		{
			icon: 'settings',
			title: 'Setup Workflows',
			text: 'Work with us to achieve your very own custom workflows.'
		},
		{
			icon: 'dvr',
			title: 'Consolidate Data',
			text:
				'Stop using multiple data sources.  With Wizebase, all of your data (or copies!) will exist in one location.'
		},
		{
			icon: 'multiline_chart',
			title: 'Go Mobile',
			text:
				'Mobile applications are the way of the future (and present!).  Obtain a modern and custom Mobile application with us today!.'
		}
	];
	return (
		<div className="section section-service4" id="service4">
			<div className="container">
				<div className="section__header">
					<h2>Integrate Your Process</h2>
					<p>Access integrations and new features in a matter of seconds</p>
				</div>
				<div className="text-center">
					<Grid container spacing={4}>
						{cardList.map((card, index) => (
							<Grid item lg={6} md={6} sm={12} xs={12} key={index}>
								<Card className="service4__card card">
									<Icon className="service4__card__icon">{card.icon}</Icon>
									<div className="service4__card__description">
										<h3>{card.title}</h3>
										<p className="m-0">{card.text}</p>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>

					<Button className="mt-32" size="large" variant="contained" color="secondary">
						Start Using Wizebase Today!
					</Button>
				</div>
			</div>
		</div>
	);
}
