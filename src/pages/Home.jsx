import { useEffect, useState }from 'react'



// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import ax from 'axios'
const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  const [show, setShow] = useState(false)

  const users = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        // https://bvc-46jr.onrender.com
      //  let response = await ax.get("http://localhost:4000/api/foodsystem", {
        let response = await ax.get("https://foodback-e4xj.onrender.com/api/foodsystem", {
          headers: {'Authorization': `Bearer ${users.token}`},
        });
        console.log(response.data)
        setWorkouts(response.data)

      } catch (err) {
        console.log(`ERROR! ${err}`);
      }
     
  
    }

    if (users) {
      fetchWorkouts()
    }
  }, [show])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
            <WorkoutDetails workout={workout} setShow={setShow} show={show} key={workout._id} />
        ))}
      </div>
      <WorkoutForm setShow={setShow} show={show} />
    </div>
  )
}

export default Home









































































/*import { useEffect, useState }from 'react'



// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import ax from 'axios'
const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  const [show, setShow] = useState(false)

  const users = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        // https://bvc-46jr.onrender.com
        let response = await ax.get("http://localhost:4000/api/foodsystem", {
          headers: {'Authorization': `Bearer ${users.token}`},
        });
        console.log(response.data)
        setWorkouts(response.data)

      } catch (err) {
        console.log(`ERROR! ${err}`);
      }
     
  
    }

    if (users) {
      fetchWorkouts()
    }
  }, [show])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
            <WorkoutDetails workout={workout} setShow={setShow} show={show} key={workout._id} />
        ))}
      </div>
      <WorkoutForm setShow={setShow} show={show} />
    </div>
  )
}

export default Home

*/




/*
import { useEffect, useState } from "react"
import ax from 'axios'
// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fetchWorkouts = async () => {

      try {
        let response = await ax.get("http://localhost:4000/api/foodsystem");
        console.log(response.data)
        setWorkouts(response.data)

      } catch (err) {
        console.log(`ERROR! ${err}`);
      }
    };
    fetchWorkouts()
  }, [show])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} setShow={setShow} show={show} key={workout._id} />
        ))}
      </div>
      <WorkoutForm setShow={setShow} show={show} />
    </div>
  )
}
export default Home
*/