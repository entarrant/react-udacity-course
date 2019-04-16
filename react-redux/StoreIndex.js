function createStore() {
  /* The store should have four parts:
     Manage the state
     Get the state
     Listen to changes on the state
     Update the state

     Only an event can change the state of the store
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

  return {
    getState,
    subscribe
  };
}
