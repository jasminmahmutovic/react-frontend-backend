import axios from "axios";
import React from "react";
import Routers from "./router/router";

function App() {
	React.useEffect(() => {
		axios.defaults.baseURL = "http://localhost:8080";
	});
	return (
		<div style={{ backgroundColor: "#393E46", height: "100%" }}>
			<Routers />
		</div>
	);
}

export default App;
