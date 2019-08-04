import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppRoot from './App/AppRoot';
import reducer from './store/reducer';

const isProd = process.env.NODE_ENV === 'production';

const logger = store => {
	return next => {
		return action => {
			if (!isProd) {
				console.log('[Middleware] Dispatching: ', action);
				const result = next(action);
				console.log('[Middleware] Next state: ', store.getState());
				return result;
			}
		}
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, window.REDUX_DATA, composeEnhancers(applyMiddleware(thunk, logger)));

function render(Component) {
	ReactDOM.hydrate(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById('react-root')
	);
}
render(AppRoot);

if (module.hot) {
	module.hot.accept('./App/AppRoot.js', () => {
		const NewAppRoot = require('./App/AppRoot.js').default;
		render(NewAppRoot);
	});
}
