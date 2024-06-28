import React from 'react'

export default function About(props) {
    /*const [mystyle,setMyStyle]=useState({

      color: 'black',
      backgroundColor: 'white',
     
    }
  )
  const[btntext,setbtntxt]=useState("Enable dark mode")
 const toggleStyle=()=>{
    if(mystyle.color==='black')
      {
        setMyStyle({
          color: 'white',
          backgroundColor: 'black' ,
  border:'1px solid white'
        })
        setbtntxt("Enable light mode")

      }
      else{
        setMyStyle({
          color: 'black',
          backgroundColor: 'white' 
      })
      setbtntxt("Enable dark mode")
  }

}*/  
let MyStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'#042743':'white',
  border:'1px solid',
  borderColor:'white'
}
return (
    <div className='container' style={MyStyle}>
        <h2 className='my-3'style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h2>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse"style={MyStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        Textutils gives you a way to analyze your text quickely and efficiently . It allowed word count,character count,convert to uppercase as well as lower case etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={MyStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        Textutils is a free character counter tool that provide instant character count and word count. statistics for a given text. Textutils reporta number of words and character
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"style={MyStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" >
      <div className="accordion-body"style={MyStyle} >
       this word counter software works in any web browser.
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
