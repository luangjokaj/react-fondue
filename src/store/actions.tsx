import axios from "axios";

export const INCREMENT = "INCREMENT";
export const FETCHDATA = "FETCHDATA";

export const increment = () => {
	return {
		type: INCREMENT,
	};
};

export const fetchData: any = () => async (dispatch: any) => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/users");
	dispatch({
		type: FETCHDATA,
		payload: res.data,
	});
};
