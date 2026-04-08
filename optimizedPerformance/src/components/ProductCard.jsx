import React from 'react'
import { memo } from 'react'

const ProductCard = ({item}) => {
  return (
      <div key={item.id} className="product-card">
            <img src={item.images[0]} width={100} height={100} alt={item.title} className="product-card-image" />
            <h3 className="product-card-title">{item.title}</h3>
            <p className="product-card-description">{item.description}</p>
            <p className="product-card-price">${item.price}</p>
          </div>
  )
}

export default memo( ProductCard)