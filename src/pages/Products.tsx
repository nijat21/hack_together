import { v4 as uniqueKey } from 'uuid'
import ProductCard from '@components/ProductCard'
import products from '../data/ProductsData.json'

function Products() {
  return (
    <div className='h-screen flex items-start my-14 mx-4 gap-4'>
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard key={uniqueKey()} product={product} />
        })}
    </div>
  )
}

export default Products
