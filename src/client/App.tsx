import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeExample from './views/HomeExample';
import ExamplePage from './views/ExamplePage';


const App: React.FC<IAppProps> = () => {
	return(
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path = '/'>
						<HomeExample />
					</Route>
					<Route exact path = '/example'>
						<ExamplePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
};





interface IAppProps {}


export default App;
