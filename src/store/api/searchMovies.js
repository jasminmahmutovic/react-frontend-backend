import axios from "axios";

export async function searchMovies(data) {
	const replaced = data.split(" ").join("+");
	const url = `http://www.omdbapi.com/?apikey=e229f8b1&s=${replaced}`;

	try {
		const res = await axios.get(url);
		if (res.status === 200) {
			return res.data;
		}
	} catch (err) {
		console.log(err);
	}
}
