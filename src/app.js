import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './App/AppRoot';
import { AppContainer } from 'react-hot-loader';

function render(Component) {
	ReactDOM.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('react-root')
	);
}
render(AppRoot);

if (module.hot) {
	module.hot.accept('./App/AppRoot.tsx', () => {
		const NewAppRoot = require('./App/AppRoot.tsx').default;
		render(NewAppRoot);
	});
}
