import React from 'react'
import RenderButtons from './renderButtons.jsx'

class PageButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      pageButtons: []
    }
  }

  render() {
    return(
      <RenderButtons setPage={this.props.setPage} pages={this.props.buttons} currentPage={this.props.currentPage}/>
    )
  }
}

export default PageButtons;



//<RenderButtons setPage={this.props.setPage}/>

//<button onClick={()=>props.setPage(2)}>Next</button>