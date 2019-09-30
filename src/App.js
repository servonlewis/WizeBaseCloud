import React from 'react';
import './styles/sass/app.scss';
import { Route, Switch, Router } from 'react-router-dom';
import Landing3 from './components/App';
import history from './utils/history';

function App() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Landing3} />
			</Switch>
		</Router>
	);
}

export default App;
