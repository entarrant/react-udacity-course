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
function todos(state = [], action) {
  // A reducer function!
  if (action.type === "ADD_TODO") {
    return state.concat([action.todo]);
  }

  return state;
}

// Store has getState, subscribe, and dispatch defined on it
const store = createStore(todos);
store.subscribe(() => {
  console.log("The new store is: ", store.getState());
});

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 0,
    name: "Learn Redux",
    complete: false
  }
});
