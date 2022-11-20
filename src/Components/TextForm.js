import React,{useState} from 'react'
import photo from './txtImg.png';

export default function TextForm(props) {
  const[text,setText]=useState("Enter Your Text Here!");    //these are state variables, and via destructuring, text got the value Enter Your Text Here! 
  // text="hjhj";  //Wrong way to update a variable
  // setText("Done Analysis")
  const onUPHandler=()=>{
    // console.log("Button Clicked");
    setText(text.toUpperCase());
    props.showalert("Converted To UpperCase!","Success! ");
  }

  const onLowHandler=()=>{
    // console.log("Button Clicked");
    setText(text.toLowerCase());
    props.showalert("Converted To LowerCase!","Success! ");

  }

  const onClearHandler=()=>{
    setText("");
    props.showalert("CLEARED!","Success! ");

  }

  const extraSpaceHandler=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Removed Extra Spaces","Success! ");

  }

  const copyHandler=()=>{
    // var text=document.getElementById("box");              //Since we are using Navigator Api, we don't need to select or deselect
    // text.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();                //After Copying, the selection made will be removed!
  }

  const onChangeHandler=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  

  return (
    <>
    <div>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2><marquee behavior="alternate" direction="left">{props.heading}</marquee></h2>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={onChangeHandler} id="box" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-4" onClick={onUPHandler}>Convert To UpperCase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-4" onClick={onLowHandler}>Convert To LowerCase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-4" onClick={onClearHandler}>Clear</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-4" onClick={extraSpaceHandler}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-4" onClick={copyHandler}>Copy Text</button>
    </div>

    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Text Summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>Average Time To Read : {0.004*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>

    <div className="txtphoto">
      <img src={photo} class="img-fluid" alt="..." />
    </div>
    </div>

    </>
  )
}
