import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import useAPI from "../api/useAPI";

const INIT_STATE = {
	todos: [],
};
export const endpoint = "http://localhost:3000/todos/";
export const Context = createContext(INIT_STATE);

export const ContextProvider = ({children}) => {
	const savedTodos = useAPI(endpoint);
	const [state, dispatch] = useReducer(Reducer, INIT_STATE);
	
	useEffect(() => {
		dispatch({type: "GET", payload: savedTodos});
	}, [savedTodos]);

	return(
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	)
}