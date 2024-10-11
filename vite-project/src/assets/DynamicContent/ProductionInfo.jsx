import React from 'react'

function ProductionInfo() {

    const product = {
        name:"Latop",
        price:"1200",
        availability:"instock"
    }
  return (
    <div>
      <h1>Specifications</h1>
      <p>Name is {product.name}</p>
      <p>Name is {product.price}</p>
      <p>Name is {product.availability}</p>
    </div>
  )
}

export default ProductionInfo