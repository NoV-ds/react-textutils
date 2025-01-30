import { useEffect, useState } from "react"
import React from 'react'

export default function Textform(prop) {
    const textToUpperCase = () => {
        setText((prev) => prev.toUpperCase())
    }

    const textToLowerCase = () => {
        setText((prev) => prev.toLowerCase())
    }

    const textToCapitalizeCase = () => {
        setText((prev) => prev.split(" ")
        )
    }

    const clearText = () => {
        setText((prev) => (""))
    }

    const GetText = () =>
        useEffect(() => {
            fetch('')
            .then((respones) => respones.json())
            .then((data) => {
                console.log(data);
                setText(data)
            })
        }, [])

    const updateText = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    
    return (
        <>
            <h1>{prop.heading}</h1>
            <div className="mb-3">
                <label htmlFor="tebox" className="form-label">Enter Text</label>
                <textarea className="form-control" id="tebox" onChange={updateText} value={text} rows="5"></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={textToUpperCase}>ToUpperCases</button>
            <button className="btn btn-primary m-2" onClick={textToLowerCase}>ToLowerCases</button>
            <button className="btn btn-primary m-2" onClick={textToCapitalizeCase}>ToCapitalizeCases</button>
            <button className="btn btn-primary m-2" onClick={GetText}>External Text</button>
            <button className="btn btn-primary m-2" onClick={clearText}>Clear Text</button>
        </>
    )
}