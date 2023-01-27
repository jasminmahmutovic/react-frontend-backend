import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Container fixed className="containerStyles">
				<App />
			</Container>
		</Provider>
	</React.StrictMode>
);
