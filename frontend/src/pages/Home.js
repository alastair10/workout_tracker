import { useEffect, useState } from "react"

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {
    // create the state
    const [workouts, setWorkouts] = useState(null)

  // hook that fires a fxn when a component is rendered
  // 2nd arg is an empty array - dependency array means it only fires once when component renders
  // after firing we have the workouts
  useEffect(() => {
    // create an async function 
    const fetchWorkouts = async () => {
      // fetch data and store response in object
      const response = await fetch('/api/workouts')
      // now pass the JSON from the res object into something we can work with, parse it!
      // returns array of workout objects
      const json = await response.json()

      // check if response is ok, update local states
      if (response.ok) {
        setWorkouts(json)
      }
    }

    fetchWorkouts()

  }, [])
  
  // map through the workouts ONLY when it has a value (it's initially null)
  // map goes through each individual workout
  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home