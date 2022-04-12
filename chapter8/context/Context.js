import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INIT_STATE = {
	todos: [
		{
			id: 1,
			text: "인사까진 연습했는데",
		},
		{
			id: 2,
			text: "거기까진 문제 없었는데",
		},
		{
			id: 3,
			text: "왜 네 앞에 서면 바보처럼 웃게 돼",
		}
	],
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