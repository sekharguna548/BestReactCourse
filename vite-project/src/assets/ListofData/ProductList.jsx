import React from 'react'

function ProductList() {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];
  return (
    <div>
        {products.map(user => (
            <div key = {products.id}>
                <p>{products.name}</p>
                <p>{products.price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList