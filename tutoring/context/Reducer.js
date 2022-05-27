const Reducer = (state, action) => {
	switch (action.type){
		// todo
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
		case "UPDATE":
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

		// modal
		case "MODAL_ADD":
			return{
				...state,
				modal: {
					mode: "add",
					isVisible: true,
				}
			}
		case "MODAL_EDIT":
			return {
				...state,
				modal: {
					mode: "edit",
					isVisible: true,
					id: action.payload,
				}
			}
		case "MODAL_END":
			return {
				...state,
				modal: {
					mode: "none",
					isVisible: false,
				}
			}
		default:
			return{
				state,
			};
	}
}

export default Reducer;