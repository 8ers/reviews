import React from 'react'
import '../styles/search.css'

const Search = (props) => {


  var filteredReviews=[]
  if(props.inSearch===false) {
    return(

      <form onSubmit={props.search}>
        <input className="searchStyle" value={props.value} type="text" placeholder="Search reviews" onChange={props.handleChange} />
      </form>
    )
  }else{
    var searchTerm= '"' + props.value + '"'
    return (
      <div className="searchContainer">
         <div className="numReviewContain">{props.numReview} guests have mentioned {searchTerm} </div>
         <button  className="backToReview" onClick={props.toReview}>Back to all reviews</button>
      </div>


    )
  }
}

export default Search;