import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./components/Order";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/order' element={<Order />} />
		</Routes>
	</BrowserRouter>
);
