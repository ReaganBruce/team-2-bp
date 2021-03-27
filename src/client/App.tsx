import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeExample from './views/HomeExample';
import ExamplePage from './views/ExamplePage';
import ExampleIDPage from './views/ExampleIDPage';


const App: React.FC<IAppProps> = () => {
	return(
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path ='/'>
						<HomeExample />
					</Route>
					<Route exact path ='/example'>
						<ExamplePage />
					</Route>
					<Route exact path ='/example/:exampleid'>
						<ExampleIDPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
};





interface IAppProps {}


export default App;
