import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const INIT_STATE = {
	todos: [],
	modal: {
		mode: "none",
		isVisible: false,
	}
};
export const Context = createContext(INIT_STATE);

export const ContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(Reducer, INIT_STATE);

	useEffect(async () => {
		//await AsyncStorage.clear();
		const load = await AsyncStorage.getItem("todos");
		const data = JSON.parse(load || "{}");

		(null !== load) && dispatch({type: "GET", payload: data});
	}, []);

	return(
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	)
}