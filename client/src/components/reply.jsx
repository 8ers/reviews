import React from 'react'
import '../styles/reply.css'

const OwnerReply = (props) => {
  // console.log('hi')
  // console.log(props)
  if(props.replies.Reply) {
    return (

    <div className="reviewReplies" >
      <div>
        <div className="replyImage">
          <img className= "Img" src={props.replies.OwnerPic} alt="face" height="40" width="40"></img>
        </div>
        <div className="replyInfo">
          <div className="OwnerName">{props.replies.OwnerName}</div>
          <div className="OwnerReply">{props.replies.Reply}</div>
          <div className="replyTime">June 2016</div>
        </div>




      </div>

      </div>

    )
  } else {
    return (<div></div>)
  }
  // return(
  //   <div>{props.replies.Reply}</div>
  // )

}

export default OwnerReply;