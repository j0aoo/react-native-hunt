import axios from "axios";

const api = axios.create({
	baseURL: "https://api.hgbrasil.com/weather/?format=json&key=0f071eb1&",
});

export default api;