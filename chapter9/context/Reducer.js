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
		default:
			return{
				state,
			};
	}
}

export default Reducer;