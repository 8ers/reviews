import React from 'react'
import '../styles/Rating.css'
import rating from "../styles/ratingItem.png"

const Rating = (props) => {
  var allRatings={
    Checkin:0,
    Communication:0,
    Location: 0,
    Cleanliness: 0,
    Accuracy:0,
    Value:0,
    Average:0
  }
  var width = 13;
  for(var review=0; review<props.allReviews.length; review++) {
    allRatings.Checkin += props.allReviews[review].Checkin
    allRatings.Communication += props.allReviews[review].Communication
    allRatings.Location += props.allReviews[review].Location
    allRatings.Cleanliness += props.allReviews[review].Cleanliness
    allRatings.Accuracy += props.allReviews[review].Accuracy
    allRatings.Value += props.allReviews[review].Value
  }

  allRatings.Checkin = (allRatings.Checkin/props.allReviews.length).toFixed(1)
  allRatings.Communication = (allRatings.Communication/props.allReviews.length).toFixed(1)
  allRatings.Location = (allRatings.Location/props.allReviews.length).toFixed(1)
  allRatings.Cleanliness = (allRatings.Cleanliness/props.allReviews.length).toFixed(1)
  allRatings.Accuracy = (allRatings.Accuracy/props.allReviews.length).toFixed(1)
  allRatings.Value = (allRatings.Value/props.allReviews.length).toFixed(1)
  allRatings.Average = Number(allRatings.Checkin)+Number(allRatings.Communication)+Number(allRatings.Location)+Number(allRatings.Cleanliness)+Number(allRatings.Accuracy)+Number(allRatings.Value)

  allRatings.Average = (allRatings.Average/6).toFixed(2)
  allRatings.Average = Number(allRatings.Average)



  var Checkin= width* (allRatings.Checkin/5)
  Checkin = Checkin.toFixed(1)
  Checkin= Checkin.toString() + '%'

  var Cleanliness= width* (allRatings.Cleanliness/5)
  Cleanliness= Cleanliness.toFixed(1)
  Cleanliness= Cleanliness.toString() + '%'

  var Communication= width* (allRatings.Communication/5)
  Communication= Communication.toFixed(1)
  Communication= Communication.toString() + '%'

  var Accuracy= width* (allRatings.Accuracy/5)
  Accuracy= Accuracy.toFixed(1)
  Accuracy= Accuracy.toString() + '%'

  var Location= width* (allRatings.Location/5)
  Location=Location.toFixed(1)
  Location= Location.toString() + '%'

  var Value= width* (allRatings.Value/5)
  Value=Value.toFixed(1)
  Value= Value.toString() + '%'

  return(
  <div className="ratingSection">
    <div className='averageRating'>{allRatings.Average}</div>
    <span style={starStyle}>&#9733;</span>
    <span className='reviewsLabel'>Reviews</span>
    <div className='categoriesSection'>
      <div className='categoryRow'>
        <div className='categories'>
          <div>
           <hr style={fullBarLeft}></hr>
           <hr style={{
                        position:'absolute',
                        border: '3px solid #04868b',
                        borderRadius: '2px',
                        width:Checkin,
                        left:'17%'
           }}></hr>
           <div className='leftRating'>{allRatings.Checkin}</div>
          </div>
          <div>Check-in</div>

        </div>
        <div className='categories'>
        <div>
           <hr style={fullBarRight}></hr>
           <hr style={{
                        position:'absolute',
                        border: '3px solid #04868b',
                        borderRadius: '2px',
                        width:Cleanliness,
                        left:'67%'
           }}></hr>
           <div className='rightRating'>{allRatings.Cleanliness}</div>
          </div>
          <div>Cleanliness</div>
        </div>
      </div>



      <div className='categoryRow'>
        <div className='categories'>
          <div>
           <hr style={fullBarLeft}></hr>
           <hr style={{
                        position:'absolute',
                        border: '3px solid #04868b',
                        borderRadius: '2px',
                        width:Communication,
                        left:'17%'
           }}></hr>
           <div className='leftRating'>{allRatings.Communication}</div>
          </div>
          <div>Communication</div>

        </div>
        <div className='categories'>
        <div>
           <hr style={fullBarRight}></hr>
           <hr style={{
                        position:'absolute',
                        border: '3px solid #04868b',
                        borderRadius: '2px',
                        width:Accuracy,
                        left:'67%'
           }}></hr>
           <div className='rightRating'>{allRatings.Accuracy}</div>
          </div>
          <div>Accuracy</div>
        </div>
      </div>


      <div className='categoryRow'>
        <div className='categories'>
          <div>
           <hr style={fullBarLeft}></hr>
           <hr style={{
                        position:'absolute',
                        border: '3px solid #04868b',
                        borderRadius: '2px',
                        width:Location,
                        left:'17%'
           }}></hr>
           <div className='leftRating'>{allRatings.Location}</div>
          </div>
          <div>Location</div>

        </div>
        <div className='categories'>
        <div>
           <hr style={fullBarRight}></hr>
           <hr style={{
                        position:'absolute',
                        border: '3px solid #04868b',
                        borderRadius: '2px',
                        width:Value,
                        left:'67%'
           }}></hr>
           <div className='rightRating'>{allRatings.Value}</div>
          </div>
          <div>Value</div>
        </div>

      </div>
    </div>
  </div>

  )
    }

export default Rating;


const starStyle = {
  color:'#04868b'
}

const fullBarLeft = {
  position:'absolute',
  border: '3px solid #c1d5d6',
  borderRadius: '2px',
  width:'13%',
  left:'17%'
}
const fullBarRight = {
  position:'absolute',
  border: '3px solid #c1d5d6',
  borderRadius: '2px',
  width:'13%',
  left:'67%'
}