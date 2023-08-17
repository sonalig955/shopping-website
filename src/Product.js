import React,{useEffect, useState} from 'react'
import './Product.css';
import Typewriter from 'typewriter-effect/dist/core';
import { useCart } from './CartContext';
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  const { addToCart } = useCart(); 


  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

    useEffect(() => {
        new Typewriter('#typewriter', {
          strings: ['>>Shoplane'],
          autoStart: true,
          typeSpeed: 150,
          backSpeed: 150,
          loop: true,
          
        });
      }, []);
      const truncateTitle = (title) => {
        const words = title.split(' ');
        if (words.length > 5) {
          return words.slice(0, 5).join(' ') + '...';
        }
        return title;
      };


  return (
    
      <>
      <nav>
        <h2 id="typewriter">
            
        </h2>
        <ul>
            <li><a href='/product'>Home</a></li>
            <li><Link to='/cart'><i className="bi bi-cart"></i></Link></li>
            <li><a href='/'>Logout</a></li>
      </ul>
      </nav>
      <div className='logos' >
        <div className='logos-slide'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd
            9GcRNaulHEpETwGcWMVHmtE-69UyxLY1l8IbRUA&usqp=CAU' alt='amazon'/>
            <img src='https://i.insider.com/506f32ddeab8ea7a42000010?width=750&format=jpeg&auto=webp' alt='ebay'/>
            <img src='https://png.pngtree.com/png-clipart/20200722/original/pngtree-logo-bag-design-online-shopping-png-image_4978892.jpg' alt='LM'/>
            <img src='https://blog.grabon.in/wp-content/uploads/2022/04/myntra-logo.jpg' alt='myntra'/>
            <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/18143901/8102.png' alt='h&m'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pTCmBx1rqamOH3Zv8qLN5z8kuNj8JoJLnA&usqp=CAU' alt='purple'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTywbvwZQi8dV7UDer_1DSedh1ue3ckT5Iw&usqp=CAU' alt='walmart'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--ntVwOfMcYuImeM0-URFw37nZbtrTWMTzQ&usqp=CAU' alt='zappos'/>
        </div>
        <div className='logos-slide'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd
            9GcRNaulHEpETwGcWMVHmtE-69UyxLY1l8IbRUA&usqp=CAU' alt='amazon'/>
            <img src='https://i.insider.com/506f32ddeab8ea7a42000010?width=750&format=jpeg&auto=webp' alt='ebay'/>
            <img src='https://png.pngtree.com/png-clipart/20200722/original/pngtree-logo-bag-design-online-shopping-png-image_4978892.jpg' alt='LM'/>
            <img src='https://blog.grabon.in/wp-content/uploads/2022/04/myntra-logo.jpg' alt='myntra'/>
            <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/18143901/8102.png' alt='h&m'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8pTCmBx1rqamOH3Zv8qLN5z8kuNj8JoJLnA&usqp=CAU' alt='purple'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTywbvwZQi8dV7UDer_1DSedh1ue3ckT5Iw&usqp=CAU' alt='walmart'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--ntVwOfMcYuImeM0-URFw37nZbtrTWMTzQ&usqp=CAU' alt='zappos'/>
        </div>
      </div>
      <h1>Top Trending Items</h1>
      <div className="container mt-4">
        <div className="row">
          
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{truncateTitle(product.title)}</h5>
                  <p className="card-text">${product.price}</p>
                  <button type="button" className="btn btn-warning" id = "addtocart" onClick={() => addToCart(product)}>Add To Cart</button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </>
    
  )
}

export default Product
