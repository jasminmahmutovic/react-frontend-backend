import axios from "axios";
import * as types from "../types";

export function searchMovies(data) {
	return async (dispatch) => {
		const replaced = data.split(" ").join("+");
		const url = `http://www.omdbapi.com/?apikey=e229f8b1&s=${replaced}`;

		try {
			const res = await axios.get(url);
			if (res.status === 200) {
				console.log(res);
				return dispatch({
					type: types.SET_SEARCH_MOVE,
					payload: res.data.search,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};
}
