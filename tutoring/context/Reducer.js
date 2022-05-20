const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const addedTodos = [...state.todos, action.payload];
			return {
				...state,
				todos: addedTodos,
			};
		case "DELETE":
			const deletedTodos = state.todos.filter(todo => todo.id !== action.payload);
			return {
				...state,
				todos: deletedTodos,
			}

		default:
			return {
				state,
			}
	}
}

export default Reducer;