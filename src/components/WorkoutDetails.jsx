
import ax from 'axios'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout,show,setShow }) => {

 
  const users = JSON.parse(localStorage.getItem('user'))

 


const handleClick = async () => {
  if (!users || !workout._id) {
    return;
  }

  try {
   // await ax.delete(`http://localhost:4000/api/foodsystem/${workout._id}`, {
    await ax.delete(`https://foodback-e4xj.onrender.com/api/foodsystem/${workout._id}`, {
      headers: {
        'Authorization': `Bearer ${users.token}`
      }
    });

    // Depending on your logic, you might want to use setShow(!show) to toggle the value
    show ? setShow(false) : setShow(true);
  } catch (error) {
    // Handle error appropriately
    console.error('Error deleting workout:', error);
  }
}

  return (
    
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>The Title for the Food I Possess : </strong>{workout.ThefoodIhaveforTitle}</p>
      <p><strong> The Today  :</strong>{workout.TheToday}</p>
      
      <div style={{display:'flex'}}>
      <p><strong> Done : </strong> </p>
       
     <input style={{width: '30px'}} type="checkbox" />
     </div>

      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>

    </div>
    

  

  )
}

export default WorkoutDetails



































/*
import ax from 'axios'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout,show,setShow }) => {

 
  const users = JSON.parse(localStorage.getItem('user'))
  const handleClick = async () => {
    if (!users) {
      return
    }
   await ax.delete('http://localhost:4000/api/foodsystem' + workout._id,{ headers: {
      'Authorization': `Bearer ${users.token}`
    }})
  
     show?setShow(false):setShow(true)
  
   
  }

  return (
    <div className="workout-details">
       <h4>{workout.title}</h4>
      <p><strong>The food I have for Title : </strong>{workout.ThefoodIhaveforTitle}</p>
      <p><strong> The Today  :</strong>{workout.TheToday}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails
*/









/*
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ax from 'axios'
const WorkoutDetails = ({ workout,show,setShow }) => {
 
  const handleClick = async () => {
    try {
      const response = await ax.delete(`http://localhost:4000/api/foodsystem/${workout._id}`);
      if (response) {
        show ? setShow(false) : setShow(true);
      }
    } catch (error) {
      console.error('Error deleting workout:', error.message);
    }
  };
  
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>The food I have for Title : </strong>{workout.ThefoodIhaveforTitle}</p>
      <p><strong> The Today  :</strong>{workout.TheToday}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
     
    </div>
  )
}
export default WorkoutDetails
*/
