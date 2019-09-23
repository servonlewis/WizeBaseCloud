import React from 'react';
import './styles/sass/app.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useAuth0 } from './react-auth0-spa';
import Theme from './Theme';
import Landing3 from './components/App';
import history from './utils/history';

function App() {
	const { loading } = useAuth0();

	if (loading) {
		return 'loading';
	}
	return (
		<MuiThemeProvider theme={Theme}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={Landing3} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
