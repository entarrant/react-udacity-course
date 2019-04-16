// Library Code
function createStore(reducer) {
  /* The store should have four parts:
     Manage the state
     Get the state
     Listen to changes on the state
     Update the state

     Only an event can change the state of the store
     The function (a reducer) that returns the new state needs to be a pure function
      - Returns the same result if the same arguments are passed in
      - Depends solely on the arguments passed in to them (doesn't use variables outside its scope)
      - Does not produce any side effects
  */

  let state;
  let listeners = [];

  const getState = () => {
    return state;
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  const dispatch = action => {
    state = reducer(state, action);

    listeners.forEach(listener => listener());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}

// App code

// Todo actions
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Goal actions
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

// Todo action creators
function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodoAction(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

function addGoalAction(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoalAction(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

function todos(state = [], action) {
  // A reducer function!
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object(assign({}, todo, { complete: !todo.complete }))
      );
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    default:
      return state;
  }
}

function app(state = [], action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  };
}

// Store has getState, subscribe, and dispatch defined on it
const store = createStore(app);
store.subscribe(() => {
  console.log("The new store is: ", store.getState());
});

store.dispatch(
  addTodoAction({
    id: 0,
    name: "Walk the dog",
    complete: false
  })
);
