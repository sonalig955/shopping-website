import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 5) {
      return words.slice(0, 5).join(' ') + '...';
    }
    return title;
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="container mt-4">
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{truncateTitle(item.title)}</h5>
                    <p className="card-text">${item.price}</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={() => addToCart(item)}
                        style={{position:'relative',
                      top:'-1.5rem',
                    left:'-5rem'}}
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        className="btn btn-primary ml-2"
                        onClick={() => {
                          if (item.quantity > 1) {
                            item.quantity=item.quantity-1;
                          }
                        }}
                        style={{position:'absolute',
                      top:'19rem',
                    left:'12rem'}}
                      >
                        -
                      </button>
                    </div>
                    <button
                      type="button"
                      className="btn btn-warning mt-2"
                      onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

