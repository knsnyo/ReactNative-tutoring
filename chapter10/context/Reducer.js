import EditButton from "../component/editButton/EditButton";
import modal from "../component/modal/modal";

const Reducer = (state, action) => {
	switch (action.type){
		case "ADD":
			const addedTodo = [...state.todos, action.payload];
			return {
				...state,
				todos: addedTodo,
			};
		case "DELETE":
			const deletedTodo = state.todos.filter((todo) =>
				(todo.id !== action.payload)
			);
			return {
				...state,
				todos: deletedTodo,
			}
		case "EDIT":
			const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
			const updatedTodos = [
				...state.todos.slice(0, index),
				action.payload,
				...state.todos.slice(index + 1),
			];
			return{
				...state,
				todos: updatedTodos,
			}
		case "GET":
			return {
				...state,
				todos: action.payload,
			}
		case "MODAL_ADD":
			return{
				...state,
				mode: "add",
				isVisible: true,
			}
		case "MODAL_EDIT":
			return {
				...state,
				mode: "edit",
				isVisible: true,
			}
		case "MODAL_END":
			return {
				...state,
				mode: "none",
				isVisible: false,
			}
		default:
			return{
				state,
			};
	}
}

export default Reducer;