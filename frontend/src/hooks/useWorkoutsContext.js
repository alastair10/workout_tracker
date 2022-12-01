// import context
import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

// create hook fxn
export const useWorkoutsContext = () => {
  // useContext hook returns the value of this context (the WorkoutsContext) which was passed into the provider component 
  //  - that component has the state and dispatch fxn inside it
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
  }

  // return the state
  return context
}