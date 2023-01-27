import { configureStore } from "@reduxjs/toolkit";

import movies from "./reducers/movies";

const store = configureStore({
	reducer: {
		movies,
	},
});

export default store;
