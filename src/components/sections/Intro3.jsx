import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

class Intro3 extends Component {
	state = {};
	render() {
		return (
			<section className="section section-intro1 section-intro3" id="intro3">
				<div className="container">
					<Grid container spacing={10} justify="center">
						<Grid item md={6}>
							<h1 className="section-intro1__title">Build Your Business</h1>
							<div className="section-intro1__subtitle">
								Create your dream Web or Mobile Application!{' '}
							</div>

							<div className="section-intro1__list">
								<div className="section-intro1__list__item text-muted">
									<Icon color="secondary">check</Icon> Custom React Web Applications.
								</div>
								<div className="section-intro1__list__item text-muted">
									<Icon color="secondary">check</Icon> Mobile Applications for Iphone and Android.
								</div>
								<div className="section-intro1__list__item text-muted">
									<Icon color="secondary">check</Icon> Cloud Database Storage.
								</div>
								<div className="section-intro1__list__item text-muted">
									<Icon color="secondary">check</Icon> Custom Workflows and integrations.
								</div>
							</div>

							<div>
								<Fab
									variant="extended"
									size="large"
									color="secondary"
									aria-label="Buy"
									className="btn-action m-8"
								>
									<Icon className="mr-16">flight_takeoff</Icon>
									Get Started!
								</Fab>
							</div>
						</Grid>
						<Grid item md={6}>
							<div className="intro3__product">
								<img src="./assets/images/illustrations/2.svg" alt="" />
							</div>
						</Grid>
					</Grid>
				</div>
			</section>
		);
	}
}

export default Intro3;
