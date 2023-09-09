// actions.js

// Ação para adicionar uma tarefa à lista
export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
}

// Ação para remover uma tarefa da lista
export function removeTask(index) {
  return {
    type: 'REMOVE_TASK',
    payload: index,
  };
}
