import React, { useState, useEffect } from 'react'
import { currency, getProducts } from './products'
import {addToCart, useLoggedIn} from 'cart/cart'



export default function HomeContent()
{
    const loggedIn = useLoggedIn()
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        getProducts().then(setProducts);
        }, [products])
  return (
      <div className='my-10 grid grid-cols-4 gap-5 bg-white rounded-md '>
          {
              products.map(product => (
                  <div key={product.id} className='flex flex-col justify-center items-center bg-white  border-2 rounded'>
                      <img src={product.image} alt={product.name} />
                      <div className='text-left'>
                          <h3 className='text-xl'>{product.name}</h3>
                          <p className='text-gray-600 text-sm'>{product.description}</p>
                          <p className='text-gray-600'>{currency.format(product.price)}</p>
                      </div>
                      {loggedIn && (
                          <button
                              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                              onClick={() => addToCart(product)}
                              id={`add-to-cart-${product.id}`}
                          >Add to Cart</button>
                      ) }
                    </div>
                ))
        }
      </div>
  )
}
