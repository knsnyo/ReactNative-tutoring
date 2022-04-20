import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
//import useAPI from "../api/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteData } from "../api/asyncStorage";

const INIT_STATE = {
	todos: [],
};
//export const endpoint = "http://localhost:3000/todos/";
//export const endpoint = "http://192.168.0.18/todos/";
export const Context = createContext(INIT_STATE);

export const ContextProvider = ({children}) => {
	//const savedTodos = useAPI(endpoint);
	const [state, dispatch] = useReducer(Reducer, INIT_STATE);
	
	useEffect(async() => {
		//await AsyncStorage.clear();
		const load = await AsyncStorage.getItem("todos");
		const data = JSON.parse(load || "{}");
		(load !== null) && dispatch({type: "GET", payload: data});
	}, []);

	return(
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	)
}