import React ,{useState} from 'react' 

export default function About(props) {




let textStyle =
{
 color: props.mode === 'dark'?'white':'#042743',
 backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',

}

  return (
    <>

    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Features</h1>
   <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={textStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={textStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Convert to Uppercase and Lowercase
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={textStyle}>
        <strong>If you want to convert your text to uppercase or lowercase</strong> , you can use this button. It will help you make the conversion.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={textStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={textStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Clear and Copy Text 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={textStyle}>
        <strong>If you want to clear your text or copy .</strong> , you can use this button. It will help you make the text copy and remove the text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={textStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={textStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Text Summary
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={textStyle}>
        <strong>In the text summary,</strong> you can see the estimated reading time, word count, character count, and a preview of the text.
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
