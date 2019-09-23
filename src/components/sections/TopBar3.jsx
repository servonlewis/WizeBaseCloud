import React, { Component, useEffect, useState } from 'react';
import { debounce, classList } from '../../Utils';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import ScrollTo from '../common/ScrollTo';
import { useAuth0 } from '../../react-auth0-spa';

function TopBar3() {
	const [ isTop, setIsTop ] = useState(true);
	const [ isClosed, setIsClosed ] = useState(true);

	const close = () => {
		setIsClosed(true);
	};

	const toggleIcon = isClosed ? 'menu' : 'close';
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

	user && console.log(user);
	console.log(isAuthenticated);
	return (
		<section
			className={classList({
				header: true,
				'header-fixed': !isTop,
				closed: isClosed
			})}
		>
			<div className="container header-container">
				<div className="brand">
					<img src="./assets/images/logo-full.png" alt="" />
				</div>
				<ul className="navigation">
					<li>
						<ScrollTo to="intro3" onScroll={close}>
							Home
						</ScrollTo>
					</li>

					<li>
						<ScrollTo to="service3" onScroll={close}>
							Service
						</ScrollTo>
					</li>
					<li>
						<ScrollTo to="service5" onScroll={close}>
							Features
						</ScrollTo>
					</li>
					<li>
						<ScrollTo to="pricing1" onScroll={close}>
							Pricing
						</ScrollTo>
					</li>
					<li>
						<ScrollTo to="contact1" onScroll={close}>
							Contact
						</ScrollTo>
					</li>
				</ul>
				<div className="m-auto" />
				<Fab
					variant="extended"
					size="medium"
					color="secondary"
					aria-label="Buy"
					className=""
					onClick={() => loginWithRedirect({})}
				>
					<Icon className="mr-16">flight_takeoff</Icon>
					Sign In
				</Fab>
				<IconButton
					className="header__toggle"
					onClick={() => {
						setIsClosed(!isClosed);
					}}
				>
					<Icon>{toggleIcon}</Icon>
				</IconButton>
			</div>
		</section>
	);
}

export default TopBar3;
