import React from "react"
import memesData from "../memesData"


export default function Meme() {
  
    const [image, setImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    
    function getImage() {
        const memesArray = memesData.data.memes // copy the array to memesArray from the js file.
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        const url = memesArray[randomNumber].url // this is getting are url from the array of URLs
        console.log(url)
        setImage(prevCount=>url)
    }
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--button" onClick={getImage}  type="button"> Get a new meme image 🖼</button>
                
            </div>
            <img src={image} className="meme--image"></img>
        </main>
    ) 
}