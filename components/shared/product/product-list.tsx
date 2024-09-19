import React from 'react'

import ProductCard from './product-card'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductList = ({ data }: { data: any }) => {
  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data.map((product: any) => (
                <ProductCard key={product.slug} product={product} />
              ))
            }
          </div>
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  )
}

export default ProductList
