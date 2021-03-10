import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
	id: numnber;
	title: string;
	completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>(url);

		dispatch({
			type: ActionTypes.FETCH_TODOS,
			payload: response.data,
		});
	};
};