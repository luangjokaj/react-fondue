import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../store/reducer";

export default () => {
	const store = createStore(reducer, applyMiddleware(thunk));
	return store;
};
