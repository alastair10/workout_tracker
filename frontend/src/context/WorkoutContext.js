// createContext is fxn that allows us to make a new context we can provide to components
import { createContext, useReducer } from "react";

// creates (and exports) a new context
export const WorkoutsContext = createContext();

// state = current state
// action = passed into dispatch fxn
export const workoutsReducer = (state, action) => {
  // check action type
  switch (action.type) {
    case 'SET_WORKOUTS': 
      // return the new value you want state to be  
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        // action.payload is a single workout object
        // ... state.workouts is spreading the prexisting workout objects
        workouts: [action.payload, ...state.workouts]
      }
    case 'DELETE_WORKOUT': 
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload.workout._id)
      }
    default: 
      return state
  }
}

// need to provide context to app component tree
// so components can access it
// children represents whatever compnonet is wrapped - in this case its the root app component
export const WorkoutsContextProvider = ({ children }) => {
  // useReducer hook updates the state 
  // get back a state and a fxn (dispatch) to update the state value
  // initial value for state is set to null 
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })

  // type property describes the state change you want to make
  // payload property is any data we need to make said change
  //  - array of workout objects
  // dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

  // return template
  // every component will have access to this context
  // provide state and dispatch so it's available to other components
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}
