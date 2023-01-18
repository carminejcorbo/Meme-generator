import React from "react"
import memesData from "../memesData"


export default function Meme() {
  
    //const [image, setImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    /*
    function getImage() {
        const memesArray = memesData.data.memes // copy the array to memesArray from the js file.
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(randomNumber)
        const url = memesArray[randomNumber].url // this is getting are url from the array of URLs
        console.log(url)
        setImage(prevCount=>url)
    }*/
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function getMemeImages(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme, randomImage:url
        }))
    }
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input"/>
                <input type="text" placeholder="Bottom text" className="form--input"/>
                <button className="form--button" onClick={getMemeImages}  type="button"> Get a new meme image 🖼</button>
                
            </div>
            <img src={meme.randomImage} className="meme--image"></img>
        </main>
    ) 
}