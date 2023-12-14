/*import React from 'react'

const Serach = () => {
    const centerTextStyle = {
        textAlign: 'center',
      };
  return (
   <>
   <div>

    <div>
        <h3>Best cardio exercises to do at home</h3>
    </div>

    <div>
  <p>
    The following are calorie-burning exercises that a person can do at home with minimal equipment. <br/><br/>

    These exercises can form a cardiovascular exercise program. <br/><br/>

    For example, a person could do each exercise for 45 seconds to 1 minute, rest for 30 seconds, and move on to the next set. <br/><br/>

    As their fitness levels increase, people may wish to perform these exercises in circuits. <br/><br/>

    To perform circuits, a person completes 30–60 second rounds of each chosen exercise in succession before resting for 30–60 seconds. They then perform the entire course again, as many times as they prefer.
  </p>
</div>
 
 <div>
    <h3>1-Marching in place</h3>
    <img className='imgf' src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_The_Exercises_You_Can_Do_Right_After_Having_a_Baby_Standing_Marching.gif' />
    <p>
    Marching in place can elevate the heart rate, making this exercise a suitable choice for a warm-up or single cardio activity.

To increase the intensity, a person can increase the speed they march or raise the knees higher.
    </p>
 </div>

 <div>
    <h3>2-Jogging in place</h3>
    <img className='imgf' src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Cardio_Exercises_You_Can_Do_At_Home_High_Knees-1.gif' />
    <p>
    Jogging in place is a simple and effective exercise to increase heart rate. This is also a suitable beginner warm-up activity.
    </p>
 </div>

 <div>
    <h3>3-Jump rope</h3>
    <img className='imgf' src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Cardio_Moves_that_Arent_Running_Jumprope-1.gif' />
    <p>
    Increase the difficulty of jumping an air rope in the beginner exercises to jumping with a real rope at home.

A person can alternate between jumping with both feet and jumping from one foot to the other.
    </p>
 </div>



  <div style={centerTextStyle}>
    <h3>3 miles walk</h3>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/DYuw4f1c4xs?si=am0EwOCzQzTihtMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div> 

   </div>

 
   
   </>





  
  )
}

export default Serach*/  


import React from 'react';
import { Link } from 'react-router-dom';

const Serach = () => {
  const centerTextStyle = {
    textAlign: 'center',
    
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const cardStyle = {
    width: '400px', // Adjust the width as needed
    margin: '10px',
    textAlign: 'center',
  };

  const cardContainerStyle10 = {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  }

  return (
    <>
      <div>
        <div style={cardContainerStyle10}>
          <h3>Best cardio exercises to do at home</h3>
        </div>

        <div style={cardContainerStyle10} >
          <p>
            The following are calorie-burning exercises that a person can do at home with minimal equipment.
            <br />
            <br />
            These exercises can form a cardiovascular exercise program.
            <br />
            <br />
            For example, a person could do each exercise for 45 seconds to 1 minute, rest for 30 seconds, and move on to the next set.
            <br />
            <br />
            As their fitness levels increase, people may wish to perform these exercises in circuits.
            <br />
            <br />
            To perform circuits, a person completes 30–60 second rounds of each chosen exercise in succession before resting for 30–60 seconds. They then perform the entire course again, as many times as they prefer.
          </p>
        </div>

        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <h3>1-Marching in place</h3>
            <img className='imgf' src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_The_Exercises_You_Can_Do_Right_After_Having_a_Baby_Standing_Marching.gif' alt="Marching in place" />
            <p>
              Marching in place can elevate the heart rate, making this exercise a suitable choice for a warm-up or single cardio activity.
              <br />
              To increase the intensity, a person can increase the speed they march or raise the knees higher.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>2-Jogging in place</h3>
            <img className='imgf' src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Cardio_Exercises_You_Can_Do_At_Home_High_Knees-1.gif' alt="Jogging in place" />
            <p>
              Jogging in place is a simple and effective exercise to increase heart rate. This is also a suitable beginner warm-up activity.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>3-Jump rope</h3>
            <img className='imgf' src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/400x400_Cardio_Moves_that_Arent_Running_Jumprope-1.gif' alt="Jump rope" />
            <p>
              Increase the difficulty of jumping an air rope in the beginner exercises to jumping with a real rope at home.
              <br />
              A person can alternate between jumping with both feet and jumping from one foot to the other.
            </p>
          </div>
        </div>

        <div style={centerTextStyle}>
          <h3>3 miles walk</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DYuw4f1c4xs?si=am0EwOCzQzTihtMy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>


        <button>
      <Link style={{ textDecoration: 'none' }} to ="/Show">
          To Show More Exercises
          </Link>
        </button>



      </div>
    </>
  );
};

export default Serach;












