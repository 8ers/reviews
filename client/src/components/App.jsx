import React from 'react'
import Axios from 'axios'
import OwnerReply from './reply.jsx'
import AllReviews from './allReviews.jsx'
import Rating from './Rating.jsx'
import PageButtons from './PageButtons.jsx'
//import '../../dist/styles.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviews: [],
      currentReviews:[],
      currentPage:1
    }
    this.setCurrentReview = this.setCurrentReview.bind(this);
  }
  componentDidMount(){
    Axios.get('/0')
    .then((data)=> {
      this.setState({
      reviews: data.data,
      currentReviews: data.data.slice(0,7)
      })
    })
  }

  setCurrentReview(page){
    var allReviews=this.state.reviews
    this.setState({
      currentPage:page,
      currentReviews: allReviews.slice(((page-1)*7), ((page-1)*7)+7)
    })
  }

  render(){
    return(
      <div className='Review'>
        <Rating allReviews={this.state.reviews}/>
        <AllReviews allReviews={this.state.currentReviews}/>
        <PageButtons allReviews={this.state.reviews} setPage={this.setCurrentReview}/>
      </div>
    )
  }
}

export default App


