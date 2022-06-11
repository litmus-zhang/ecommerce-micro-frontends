import React, { useState, useEffect } from 'react'
import { currency, getProductById } from 'home/products'
import { useParams } from 'react-router-dom'


export default function PDPContent()
{
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    
    useEffect(() =>
    {
        if (id)
        {
            getProductById(id).then(setProduct);
        } else
        {
            setProduct(null);
        }

    }, [id])
    if (!product) return null
  return (
      <div className='grid grid-cols-2 gap-5'>
          <div>
              <img src={product.image } alt={product.name}/>
          </div>
          <div>
              <h1>{product.name}</h1>
              <h2>{currency.format(product.price)}</h2>
              <p>{product.description}</p>
              <p>{ product.longDescription}</p>
          </div>
      </div>
  )
}
