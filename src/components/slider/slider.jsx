
import "./slider.css"
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";
const Slider = () => {
//  pour passer d'une slide a une autre
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex - 1);
        }else{
            setSlideIndex(slideIndex + 1)
        }
    }
    return (
         <div className="slider-container">
         {slideIndex!==0 && <i onClick={()=> handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>}
         {/*
          cette operation centralise sur le passage car le width=100vw pour l'eviter il faut faire la substraction
          translatex faire le deplacement horzantale  pour deplacer a gauche - else + */}
    <div  style={{transform:`translateX(${slideIndex *-100}vw)`}}className="slider-wrapper">
        <div className="slide first-slide">
            <div className="slide-img-wrapper">
                <img src={FirstBook} alt="" />
            </div>
            <div className="slide-info-wrapper">
                <h1 className="slide-info-title">Book Store</h1>
                <p className="slide-info-dec">
                  it's not just reading .It's living the adventure
                </p>
            </div>
        </div>
        <div className="slide second-slide">
            <div className="slide-img-wrapper">
                <img src={SecondBook} alt="" />
            </div>
            <div className="slide-info-wrapper">
                <h1 className="slide-info-title">The books for everyone</h1>
                <p className="slide-info-dec">
                    you can read at home or at the bookStore
                </p>
            </div>
        </div>
        <div className="slide third-slide">
            <div className="slide-img-wrapper">
                <img src={ThirdBook} alt="" />
            </div>
            <div className="slide-info-wrapper">
                <h1 className="slide-info-title"> Check Out the new Titles</h1>
                <p className="slide-info-dec">
                    we send you the book you want at home
                </p>
            </div>
        </div>
    </div>
    {slideIndex !==2 &&  <i  onClick={()=> handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>}
   </div>  );
}
 
export default Slider;