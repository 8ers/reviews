import React from 'react'
import '../styles/renderButtons.css'
const RenderButton = (props) => {
  var ButtonArray=[]
  var allButton=props.pages

  if(props.pages.length===2) {
    ButtonArray.push(1)
    ButtonArray.push(2)
    if(props.currentPage===1){
      ButtonArray.push('>')
    } else{
      ButtonArray.unshift('<')
    }
  }else if(props.pages.length===3) {
    ButtonArray.push(1)
    ButtonArray.push(2)
    ButtonArray.push(3)
    if(props.currentPage===1){
      ButtonArray.push('>')
    } else if(props.currentPage===2){
      ButtonArray.unshift('<')
      ButtonArray.push(">")
    }else if(props.currentPage===3){
      ButtonArray.unshift('<')
    }
  }else if(props.pages.length===4) {
    ButtonArray.push(1)
    ButtonArray.push(2)
    ButtonArray.push(3)
    ButtonArray.push(4)
    if(props.currentPage===1){
      ButtonArray.push(">")
    }else if (props.currentPage===2 || props.currentPage===3) {
      ButtonArray.unshift("<")
      ButtonArray.push(">")
    }else if(props.currentPage===4) {
      ButtonArray.unshift("<")
    }
  }else if(props.pages.length===5) {
    ButtonArray.push(1)
    ButtonArray.push(2)
    ButtonArray.push(3)
    if(props.currentPage===1){
      ButtonArray.push('>')
    }else if(props.currentPage===2){
      ButtonArray.unshift("<")
      ButtonArray.push('>')
    }else if(props.currentPage===3){
      ButtonArray.unshift("<")
      ButtonArray.push(4)
      ButtonArray.push('>')
    }else if (props.currentPage===4) {
      ButtonArray.unshift("<")
      ButtonArray.push(4)
      ButtonArray.push(5)
      ButtonArray.push('>')
    }else if(props.currentPage===5) {
      ButtonArray.unshift("<")
      ButtonArray.splice(2,0,'...')
      ButtonArray.push(4)
    }
  }

  // if(props.pages.length>4) {
  //   ButtonArray=allButton.slice(0,3)
  //   ButtonArray.push('...')
  //   ButtonArray.push(allButton.length)
  //   ButtonArray.push('>')
  // }
  if(props.pages.length>5) {
    if(props.currentPage===1) {
      var ButtonArray=allButton.slice(0,3)
      ButtonArray.push('...')
      ButtonArray.push(allButton.length)
      ButtonArray.push('>')
    }
    else if(props.currentPage>1) {
      var ButtonArray=[]
      ButtonArray.push('<')
      if(props.currentPage===2) {
        ButtonArray.push(1)
        ButtonArray.push(2)
        ButtonArray.push(3)
        ButtonArray.push('...')
        ButtonArray.push(allButton.length)

      }
      else if(props.currentPage===3) {
        for(var i=1; i<=4; i++) {
          ButtonArray.push(i)
        }
        ButtonArray.push('...')
        ButtonArray.push(allButton.length)
      }
      else if(props.currentPage===4) {
        for(var i=1; i<=5; i++) {
          ButtonArray.push(i)
        }
        ButtonArray.push('...')
        ButtonArray.push(allButton.length)
      }
      else if(props.currentPage>=5 && props.currentPage<=allButton.length-4) {
        console.log('in 5')
        ButtonArray.push(1)
        ButtonArray.push('...')
        ButtonArray.push(props.currentPage-1)
        ButtonArray.push(props.currentPage)
        ButtonArray.push(props.currentPage+1)
        ButtonArray.push('...')
        ButtonArray.push(allButton.length)
      }
      else if(props.currentPage===allButton.length-3){
        console.log('in button length -3')
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-4; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      else if(props.currentPage===allButton.length-2){
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-3; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      else if(props.currentPage===allButton.length-1){
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-2; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      else if(props.currentPage===allButton.length){
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-2; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      if(props.currentPage != allButton.length){
      ButtonArray.push('>')
      }
    }
  }

  return (
    <div className='allButton'>
      {ButtonArray.length > 1 &&
      ButtonArray.map((page)=> {
        if(typeof page === 'number' && page===props.currentPage) {
          return(<button className="currentPageBut" onClick={()=>props.setPage(page)}>{page}</button>)
        } else if(typeof page === 'number'){
          return(<button className="pageBut" onClick={()=>props.setPage(page)}>{page}</button>)
        }else if(page==='...') {
          return(<button className="tripleDot" >{page}</button>)
        } else if(page=== '<') {
          return(<button  className="endPageBut" onClick={()=>props.setPage(props.currentPage-1)}>{page}</button>)
        } else if(page=== '>') {
          return(<button className="endPageBut" onClick={()=>props.setPage(props.currentPage+1)}>{page}</button>)
        }

      })}
    </div>
  )
}
export default RenderButton