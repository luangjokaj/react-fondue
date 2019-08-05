# Redux Store
ReactFondue supports a minimal Redux setup out of the box. The example below shows how to fetch data asynchronously while supporting server-side rendering.

### Asynchronous Data
Every page that requires fetching asynchronous data is required to have a unique function that will dispatch an action before runtime thus populating the Redux Store and allowing the server to render all the data. The function accepts the store as a parameter and this is sent from the server.

Check the file: `src/Views/ReduxPage/ReduxPage.tsx` or [click here](https://github.com/luangjokaj/react-fondue/blob/master/src/Views/ReduxPage/ReduxPage.tsx).

```js
function loadData(store: any) {
	store.dispatch(actionCreators.fetchData());
}
```
The function has to be exported in order to import it later on the router configuration.

#### Update routes
In the file: `src/App/Routes.js` or [click here](https://github.com/luangjokaj/react-fondue/blob/master/src/App/Routes.js). The function is imported and used in the router configuration:
```js
import { loadData } from '../Views/ReduxPage/ReduxPage';
```
```js
{
	loadData,
	exact: true,
	path: '/:lang/redux-store',
	page: 'ReduxPage',
},
```

#### Call the Function
In the file: `server/render.js` or [click here](https://github.com/luangjokaj/react-fondue/blob/master/src/server/render.js). `matchRoutes` identifies all routes containing the function and triggers it in order to populate the store.

```js
const promises = matchRoutes(routes, req.path).map(({ route }) => {
	route.loadData ? route.loadData(store) : null;
});
```

We call the function and pass the store as a parameter only if the function exists in the route. Once the Promise is resolved, only then `renderToString()` is being executed.

# Demo 👇
