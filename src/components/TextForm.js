import React, {useState} from 'react'



export default function TextForm(props) {
    
    const [text, setText] = useState("")
    
    const changeText = (event)=>{
        setText(event.target.value)
    }

    const upperCase = ()=>{
        setText(text.toUpperCase())
    }
    const lowerCase = ()=>{
        setText(text.toLowerCase())
    }

    const numberOfWords = ()=>{
        let spaces = text.split(" ").length
        if(text.length === 0) spaces = 0
        return spaces
    }
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea onChange = {changeText} value = {text} class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick = {upperCase}>Upper case</button>
            <button className="btn btn-primary mx-2" onClick = {lowerCase}>Lower case</button>
        </div>
        <div className='container my-3'>
            <h4>Your text summary</h4>
            {text.length} letters, {numberOfWords()} words
        </div>
        </>
    )
}
