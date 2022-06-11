import React, { useState, useEffect } from 'react'
import { cart, clearCart } from './cart'
import {currency } from 'home/products'



export default function MiniCart()
{
    const [items, setItems] = useState(undefined)
    const [showCart, setShowCart] = useState(false)
    
    useEffect(() =>
    {
        setItems(cart.value?.cartItems);
        return cart.subscribe(c => setItems(c?.cartItems))
    }, [])
    if (!items) return null;
    


  return (
      <>
          <span onClick={() => setShowCart(!showCart)} id="showcart">
              <i className='ri-shopping-cart-fill text-2xl'>
                  {items.length}
                </i>
          </span>
          {
              showCart && (
                  <>
                      <div
                          className='absolute p-5 border-4 border-blue-800 bg-white rounded-lg shadow-lg'
                          style={{
                              width: 300,
                              top: "2rem",
                            left: -250,
                          }}
                      >
                          <div className='grid gap-3 text-sm'
                              style={{
                              gridTemplateColumns: "1fr 3fr 10fr 2fr",
                          }}
                          >
                              {
                    items.map(item => (
                    <React.Fragment key={item.id}>
                    <div>{item.quantity}</div>
                            <img src={item.image} alt={item.name} />
                            <div>{item.name}</div>
                            <div className='text-right'>
                                {currency.format(item.price * item.quantity)}
                            </div>
                    </React.Fragment>
                                    ))
                              }
                              <div></div>
                              <div></div>
                              <div></div>
                              <div>
                                  {
                                      currency.format(items.reduce((acc, item) => acc + item.price * item.quantity, 0))
                                  }
                              </div>
                          </div>
                          <div className='flex'>
                              <div className='flex-grow'>
                                  <button
                                      id='clearcart'
                                      className='bg-white border border-green-800 text-green-700 px-5 rounded-md'
                                      onClick={clearCart}
                                  >
                                      Clear Cart
                                  </button>
                              </div>
                              <div className='flex-end'>
                                  <button
                                      className='bg-green-800 text-white px-5 rounded-md'
                                      onClick={clearCart}
                                  >
                                      Checkout
                                  </button>
                              </div>
                          </div>
                
                      </div>
                  </>
                )
          }
      
      </>
  )
}
