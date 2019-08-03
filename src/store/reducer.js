const initialState = {
	counter: 0,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + 1,
			}
	}

	return state;
};

export default reducer;
