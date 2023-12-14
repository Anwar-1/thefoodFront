import { useState } from "react"
import ax from 'axios'


const WorkoutForm = ({show,setShow}) => {
  
  
  const users = JSON.parse(localStorage.getItem('user'))
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!users) {
    //   setError('You must be logged in')
    //   return
    // }

    try {
      const workout = {title, load, reps}
      const users = JSON.parse(localStorage.getItem('user'))
  
     // const response = await ax.post('http://localhost:4000/api/foodsystem' ,workout,{ headers: {
      const response = await ax.post('https://foodback-e4xj.onrender.com/api/foodsystem' ,workout,{ headers: {
        'Authorization': `Bearer ${users.token}`
      }})
     
         setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      show?setShow(false):setShow(true)
     
    } catch (error) {
     
      setError('please fill out all fields')
    }
   
  
   
   
  }

  return (
   
      <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a New FoodSystem</h3>
        
        
        <label>Title for the FoodSystem Sections (Breakfast, Lunch, Dinner):</label>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
        />
  
        <label>The Title for the Food I Possess:</label>
        <input 
          type="text" 
          onChange={(e) => setLoad(e.target.value)} 
          value={load}
        />
  
        <label>Select for today : </label>
        <select onChange={(e) => setReps(e.target.value)} 
          value={reps}  >
         <option>select the today</option>
         <option>Sunday</option>
         <option>Monday</option>
         <option>Tuesday</option>
         <option>Wednesday</option>
         <option>Thursday</option>
         <option>Friday</option>
         <option>Saturday</option>
  
        </select>
     
  
        <button className='custom-btn btn-9'>Add FoodSystem</button>
        {error && <div className="error">{error}</div>}
      </form>
  )
}

export default WorkoutForm











































































/*import { useState } from "react"
import ax from 'axios'


const WorkoutForm = ({show,setShow}) => {
  
  
  const users = JSON.parse(localStorage.getItem('user'))
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!users) {
    //   setError('You must be logged in')
    //   return
    // }

    try {
      const workout = {title, load, reps}
      const users = JSON.parse(localStorage.getItem('user'))
  
      const response = await ax.post('http://localhost:4000/api/foodsystem' ,workout,{ headers: {
        'Authorization': `Bearer ${users.token}`
      }})
     
         setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      show?setShow(false):setShow(true)
     
    } catch (error) {
     
      setError('please fill out all fields')
    }
   
  
   
   
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New FoodSystem</h3>
      
      
      <label>FoodSystem Title (The Breakfast,The Launch, The Dinner):</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>The food I have for Title :</label>
      <input 
        type="text" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>The Today :</label>
      <select onChange={(e) => setReps(e.target.value)} 
        value={reps}  >
       <option>select the today</option>
       <option>Sunday</option>
       <option>Monday</option>
       <option>Tuesday</option>
       <option>Wednesday</option>
       <option>Thursday</option>
       <option>Friday</option>
       <option>Saturday</option>

      </select>
   

      <button className='custom-btn btn-9'>Add FoodSystem</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm

*/


/*
import { useState } from 'react'
import ax from 'axios'
const WorkoutForm = ({show,setShow}) => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const workout = { title, load, reps };
  
    try {
      const response = await ax.post("http://localhost:4000/api/foodsystem", workout);
      setError(null);
      setTitle('');
      setLoad('');
      setReps('');
      show ? setShow(false) : setShow(true);
      console.log('new workout added:', response.data); // Assuming the response contains data
    } catch (error) {
      setError('please make sure you add all fields');
    }
  };
  

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New FoodSystem</h3>
      
      
      <label>FoodSystem Title (The Breakfast,The Launch, The Dinner):</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>The food I have for Title :</label>
      <input 
        type="text" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>The Today :</label>
      <select onChange={(e) => setReps(e.target.value)} 
        value={reps}  >
       <option>select the today</option>
       <option>Sunday</option>
       <option>Monday</option>
       <option>Tuesday</option>
       <option>Wednesday</option>
       <option>Thursday</option>
       <option>Friday</option>
       <option>Saturday</option>

      </select>
   

      <button className='custom-btn btn-9'>Add FoodSystem</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
*/
