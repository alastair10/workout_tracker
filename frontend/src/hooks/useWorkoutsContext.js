// import context
import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

// create hook fxn
export const useWorkoutsContext = () => {
  // useContext hook returns the value of this context (the WorkoutsContext) which was passed into the provider component 
  //  - that component has the state and dispatch fxn inside it
  const context = useContext(WorkoutsContext)

  // 


  // return the state
  return context
}