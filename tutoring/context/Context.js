import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

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

	return(
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	)
}