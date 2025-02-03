import { useState } from "react"
import React from 'react'

export default function Textform(prop) {
    const alertMessage = (type, message) => {
        prop.showAlert(type, message)
        prop.alertTimeOut()
    }
    const textToUpperCase = () => {
        setText((prev) => prev.toUpperCase())
        alertMessage("primary", "Text converted to UpperCase")
    }

    const textToLowerCase = () => {
        setText((prev) => prev.toLowerCase())
        alertMessage("primary", "Text converted to lower Case")
    }

    const textToCapitalizeCase = () => {
        setText((prev) => prev.charAt(0).toUpperCase() + prev.slice(1))
        alertMessage("primary", "Text converted to capitlize Case")
    }

    const clearText = () => {
        setText((prev) => (""))
        alertMessage("primary", "Text cleared")
    }

    const GetText = () =>{
            let url = "http://localhost:8000/ecommerce/api/v1/user/profile"
            let header = {
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1bWl0QHlvcG1haWwuY29tIiwiZXhwIjoxNzM4NTY2NDU1fQ.vu1oiyaOmXXoEtnLtZgRAA2kG8ILamOAhKKfnV66s8c"
            }
            fetch(url, {
                method: "GET", 
                headers: header
            })
            .then((respones) => respones.text())
            .then((data) => {setText(data)
                console.log(data)
                alertMessage("primary", "Text updated successfully")
            })
            .catch(error => alertMessage("danger", "Text not found"))
        }

    const updateText = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    
    return (
        <>
        <div className={`container text-${prop.mode === "light"?"dark":"light"}`}>
            <h1>{prop.heading}</h1>
            <div className="mb-3">
                <label htmlFor="tebox" className="form-label">Enter Text</label>
                <textarea className="form-control" id="tebox" onChange={updateText} style={{backgroundcolor: prop.mode === "light"?"dark":"light"}} value={text} rows="5"></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={textToUpperCase}>ToUpperCases</button>
            <button className="btn btn-primary m-2" onClick={textToLowerCase}>ToLowerCases</button>
            <button className="btn btn-primary m-2" onClick={textToCapitalizeCase}>ToCapitalizeCases</button>
            <button className="btn btn-primary m-2" onClick={GetText}>External Text</button>
            <button className="btn btn-primary m-2" onClick={clearText}>Clear Text</button>
        </div>
        </>
    )
}