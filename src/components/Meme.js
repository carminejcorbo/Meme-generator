import React from "react"
import memesData from "../memesData"


export default function Meme() {
  
    const [image, setImage] = React.useState("")
    
    function getImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        const url = memesArray[randomNumber].url
        console.log(url)
        setImage(prevCount=>url)
    }
    return (
        <main>
            <form className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--button" onClick={getImage}  type="button"> Get a new meme image 🖼</button>
                <img src={image}></img>
            </form>
        </main>
    ) 
}