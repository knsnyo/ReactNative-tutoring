import { useState, useEffect } from "react";
import axios from "axios";

const useAPI = (endpoint) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const res = await axios.get(endpoint);
		setData(res.data);
	};

	return data;
}

export default useAPI;