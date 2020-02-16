import * as actionTypes from "./actions";

const initialState = {
	counter: 0,
	data: [],
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		case actionTypes.FETCHDATA:
			return {
				...state,
				data: action.payload,
			};
	}

	return state;
};

export default reducer;
