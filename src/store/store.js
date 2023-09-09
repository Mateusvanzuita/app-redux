// store.js

import { createStore } from 'redux';

// Reducer inicial que define o estado inicial da lista de tarefas
const initialState = {
  tasks: [],
};

// Reducer que atualiza o estado com base nas ações
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

// Crie a store usando o reducer
const store = createStore(taskReducer);

export default store;
