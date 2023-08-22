import {useParams}from "react-router-dom"
import {books} from "../../data/books"
import Rating from "../../components/book-slider/Rating";
import "../../pages/book/book.css"; 
import { useContext, useState } from "react";
import CartContext from "../../components/context/CartContext";
import  "../../data/books";
const  Book = () => {
   const {addToCart} = useContext(CartContext);
    
   const {id} =useParams();
  const book = books.find(b => b.id === +id);//parseInt(id) = +1
 const [qty , setQty]= useState(1);

    return ( <div className="books">
        <div className="book-content">
            <img src={`/${books.image}`} alt={books.title} className="book-content-img" />
            <div className="book-content-info">
                <h1 className="book-title" >
                {books.title}     </h1>
                <div className="book-author">
                    by <span>{books.author}</span> (Author)
                </div>
           <Rating rating = {books.rating}  review = {books.reviews} />
      <div className="book-add-to-cart">
        <input min="1" max="100" type="number" 
        value={qty}
        onChange={e => setQty(e.target.value)}
        className="book-add-to-card-input" />
        <button onClick={ () =>addToCart({...book , quantity : qty})}  className="book-add-to-cart-btn">
        <i className="bi bi-cart-plus"></i>
        Add To Cart

        </button>
      </div>
           
        
        <p className="book-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam facere voluptatem perspiciatis laudantium. Iure recusandae nihil molestias ducimus illum pariatur, omnis a ratione ipsum
             temporibus mollitia tempora expedita sed sapiente?
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate dolores magnam, unde ducimus eum pariatur voluptatem molestias, illo architecto adipisci! Voluptates vel nobis ducimus cumque
              eligendi? Expedita, dignissimos veniam.
        </p>
    </div> 
    </div>
    </div>
    );
};
 
export default  Book;