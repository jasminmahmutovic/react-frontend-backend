import * as types from "../types";

const initialState = [];

const movies = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_SEARCH_MOVE:
			return (state = {
				...state,
				movies: action.payload,
			});
		default: {
			return initialState;
		}
	}
};

export default movies;
