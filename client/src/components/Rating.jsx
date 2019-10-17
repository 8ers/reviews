import React from 'react'

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

  allRatings.Checkin = allRatings.Checkin/props.allReviews.length
  allRatings.Communication = allRatings.Communication/props.allReviews.length
  allRatings.Location = allRatings.Location/props.allReviews.length
  allRatings.Cleanliness = allRatings.Cleanliness/props.allReviews.length
  allRatings.Accuracy = allRatings.Accuracy/props.allReviews.length
  allRatings.Value = allRatings.Value/props.allReviews.length
  allRatings.Average = allRatings.Checkin+allRatings.Communication+allRatings.Location+allRatings.Cleanliness+allRatings.Accuracy+allRatings.Value

  allRatings.Average = (allRatings.Average/6).toFixed(2)
  allRatings.Average = Number(allRatings.Average)

  var Checkin= width* (allRatings.Checkin/5)
  Checkin= Checkin.toString() + '%'
  console.log(Checkin);
  return(
  <div className="ratingSection">
    <div className='averageRating'>{allRatings.Average}</div>
    <span style={starStyle}>&#9733;</span>
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
          </div>
          <div>Cleanliness</div>

        </div>
      </div>
      <div className='categoryRow'>
        <div className='categories'>Communication</div>
        <div className='categories'>Accuracy</div>
      </div>
      <div className='categoryRow'>
        <div className='categories'>Location</div>
        <div className='categories'>Value</div>
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