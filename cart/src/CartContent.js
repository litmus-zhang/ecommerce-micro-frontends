import React, { useState, useEffect } from 'react'
import { currency } from 'home/products'
import {cart, clearCart} from 'cart/cart'


export default function CartContent()
{
    const [items, setItems] = useState([])
    useEffect(() =>{
      return cart.subscribe(value => setValue(value?.cartItems ?? []))
    }, [])
  return (
    <>
      <div className='my-10 grid grid-cols-4 gap-5'>
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
      {
        items.length > 0 && (
          <div className='flex mb-10'>
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
          )
      }
    </> 
  )
}
