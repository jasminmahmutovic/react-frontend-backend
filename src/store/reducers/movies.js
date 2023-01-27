import * as types from "../types";

const initialState = {
	poster: "",
	title: "",
	type: "",
	year: "",
	imdbID: "",
};

const movies = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_SEARCH_MOVE:
			return (state = {
				...state,
				poster: action.payload.poster,
				title: action.payload.title,
				type: action.payload.type,
				year: action.payload.year,
				imdbID: action.payload.imdbID,
			});
		default: {
			return initialState;
		}
	}
};

export default movies;
