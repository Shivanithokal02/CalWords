import React ,{useState} from 'react' 

export default function Textform(props) {

    const [text, setText] = useState('');
    const handleUpCase = () => {
        console.log("Uppercase was clicked" );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Cleared","success");
    }
    const handleCopytoClickboat = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");
    }
    const handletext = (event) => {
        setText(event.target.value)
        props.showAlert("Text Changed","success");
    }
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handletext} style={{backgroundColor:props.mode === 'dark'? '#13466e':'white',color:props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleUpCase}>Convert to Uppercase</button>
            <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert to Lower</button>
            <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
            <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleCopytoClickboat}>Copy Text</button>
        </div>

        <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'black'}}>
            <h2>Your Text Summary </h2>
            <p>{text.length}Charecters</p>
            <p>{text.split(/s\+/).filter((element)=>{return element.length!==0}).length} words</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
