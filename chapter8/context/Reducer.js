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
			console.log(deletedTodo);
			return {
				...state,
				todos: deletedTodo,
			}
		default:
			return{
				state,
			};
	}
}

export default Reducer;