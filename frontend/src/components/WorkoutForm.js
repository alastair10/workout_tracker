import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


const WorkoutForm = () => {
  // create states
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  

  const handleSubmit = async (e) => {
    // prevent default action of refresh (submitting the info)
    e.preventDefault()
    // create dummy workout object
    const workout = {title, load, reps}

    // use fetch api to send post request to post new data
    const response = await fetch('/api/workouts', {
      method: 'POST', 
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // whatever the req comes back with (success or failure) store that json resp
    const json = await response.json()
    // set the error state with 2 if statements
    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      // reset fields to add another
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      console.log('new workout added')
      // if response is ok, add the workout to the db
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  //return a template form
  // updates the state when user inputs
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Exercise Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Load (in kg): </label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}

      />

      <label>Reps: </label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}

      />

      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm