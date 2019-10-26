import React from 'react'
import Axios from 'axios'
import OwnerReply from './reply.jsx'
import AllReviews from './allReviews.jsx'
import Rating from './Rating.jsx'
import PageButtons from './PageButtons.jsx'
import Search from './Search.jsx'
import '../styles/app.css'
var _ = require('underscore');
//import '../../dist/styles.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviews: [],
      currentReviews:[],
      currentPage:1,
      currentButtons:[],
      filteredReview:[],
      searchTerm:'',
      search:false,

    }
    this.setCurrentReview = this.setCurrentReview.bind(this);
    this.searchReviews = this.searchReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.backToReview = this.backToReview.bind(this);
  }
  componentDidMount(){
   // console.log(`http://localhost:3001${window.location.pathname}`);
    var id=window.location.pathname.split('/')[2]
    console.log(window.location.href)
    var url=window.location.href;
    url = url.split(':')[0]+':' + url.split(':')[1]
    console.log(url)
    //id = id.slice(7)
    //console.log(id, 'this is id')
    Axios.get(`${url}:3001/roomID/${id}`)
    .then((data)=> {
      this.setState({
      reviews: data.data,
      currentReviews: data.data.slice(0,7),
      currentButtons: _.range(1,Math.ceil(data.data.length/7)),
      id: id
      })
    })
  }
  searchReviews(event){
    var page=1;
    event.preventDefault();
    var allReviews= this.state.reviews;
    var filteredReview=[]
    var buttons=[]
     for(var i=0; i<allReviews.length; i++) {
       if(allReviews[i].Content.includes(this.state.searchTerm)){
         filteredReview.push(allReviews[i])
       } else if(allReviews[i].Title.includes(this.state.searchTerm)){
        filteredReview.push(allReviews[i])
       }
     }
     for(var i=1; i<=Math.ceil(filteredReview.length/7); i++) {
       buttons.push(i)
     }
    this.setState({
      filteredReview: filteredReview,
      currentButtons:buttons,
      search:true,
      currentPage:1,
      currentReviews: filteredReview.slice(((page-1)*7), ((page-1)*7)+7)
    })


  }
  backToReview() {

    var allReviews=this.state.reviews
    this.setState({
      currentReviews: allReviews.slice(((1-1)*7), ((1-1)*7)+7),
      search:false,
      currentPage:1,
      currentButtons: _.range(1,Math.ceil(allReviews.length/7))
    })
  }
  handleChange(event) {
    var target = event.target;
    var term = target.value;
    this.setState({
      searchTerm: term
    })
  }

  setCurrentReview(page){
    var allReviews=this.state.reviews
    var filteredReview=this.state.filteredReview
    if(this.state.search===false) {
    this.setState({
      currentPage:page,
      currentReviews: allReviews.slice(((page-1)*7), ((page-1)*7)+7)
    })}
    if(this.state.search===true) {

      this.setState({
        currentPage:page,
        currentReviews: filteredReview.slice(((page-1)*7), ((page-1)*7)+7)
      })

    }

  }

  render(){
    return(
      <div className='Review'>
        <Rating allReviews={this.state.reviews}/>
        <Search allReviews={this.state.reviews} search={this.searchReviews} handleChange={this.handleChange} value={this.state.searchTerm} inSearch={this.state.search} numReview={this.state.filteredReview.length} toReview={this.backToReview}/>
        <AllReviews allReviews={this.state.currentReviews}/>
        <PageButtons allReviews={this.state.reviews} setPage={this.setCurrentReview} buttons={this.state.currentButtons} currentPage={this.state.currentPage}/>
      </div>
    )
  }
}

export default App