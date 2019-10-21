
export const createStore = function (reducer, initState) {
    let state = initState;
    let listeners = [];

    /*订阅*/
    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        /*请按照我的计划修改 state*/
        state = reducer(state, action);
        /*通知*/
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    function getState() {
        return state;
    }


    dispatch({ type: Symbol() })
    return {
        subscribe,
        dispatch,
        getState
    }
}

