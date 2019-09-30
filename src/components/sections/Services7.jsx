import React from 'react';
import { Grid, Button } from '@material-ui/core';

export default function() {
	return (
		<div className="section section-service7 light-gray" id="service7">
			<div className="container">
				<Grid container alignItems="center" spacing={4}>
					<Grid item lg={6} md={6} sm={12} xs={12}>
						<div className="service7__card__description">
							<h2>Every business matters. We give you tools to succeed.</h2>
							<p>
								Wizebase offers the technical tools you need to start or improve your own company
								(ranging from small to enterprise!). This includes custom applications, mobile
								applications, custom workflows, cloud storage and more!
							</p>

							<Button variant="contained" color="secondary" className="mt-16">
								Request Consultation
							</Button>
						</div>
					</Grid>
					<Grid item lg={6} md={6} sm={12} xs={12}>
						<img src="./assets/images/illustrations/1.svg" alt="analyze" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
