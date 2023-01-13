import React from "react"
import Face from "../images/face.png"

export default function Header(){
    return (
        <div className="header">
        <img src={Face} className="header--image"></img>
        <h3 className="header--title">Meme Generator</h3>
        <h4 className="header--project">React Course - Project 3</h4>
        </div>
    )
}