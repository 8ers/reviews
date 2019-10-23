import React from 'react'
import OwnerReply from './reply.jsx'
import  '../styles/allReview.css'
const AllReviews = (props) => {

  return(
  <div>

    {props.allReviews.map((review)=>(
       <div className='review'>
       <div>
         <div className="userDate">
           <div className='reviewUsername'> {review.Username} </div>
           <div className='reviewTime'> {review.TimeFormated} </div>
         </div>
         <div className= "reviewImg">
           <img className= "Img" src={review.ProfilePic} alt="face" height="50" width="50"></img>
         </div>
       </div>
       <div className='reviewContent'>{review.Content} </div>
       <OwnerReply replies={review}/>
       </div>


    ))}
  </div>

  )
    }

export default AllReviews;



{/* <div className='review'>
<div>
  <div className="userDate">
    <div className='reviewUsername'> {review.Username} </div>
    <div className='reviewTime'> {review.TimeFormated} </div>
  </div>
  <div className= "reviewImg">
    <img className= "Img" src={review.ProfilePic} alt="face" height="50" width="50"></img>
  </div>
</div>
<div className='reviewContent'>{review.Content} </div>
<OwnerReply replies={review}/>
</div> */}


