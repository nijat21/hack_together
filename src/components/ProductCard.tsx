import { Link } from 'react-router-dom'
import { v4 as uniqueKey } from 'uuid'
import { ProductProp, ProductType } from '../types/ProductTypes'

function ProductCard(props: ProductProp) {
  const product: ProductType = props.product

  return (
    product && (
      <Link to={`/products/${product._id}`} className='card bg-base-100 w-96 shadow-xl'>
        <figure>
          <img src={product.imgUrl} alt='product image' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{product.name}</h2>
          <p>{product.description}</p>
          <div className='card-actions justify-end'>
            {product.tags &&
              product.tags.map((tag: string) => {
                return (
                  <div key={uniqueKey()} className='badge badge-secondary'>
                    {tag}
                  </div>
                )
              })}
          </div>
        </div>
      </Link>
    )
  )
}

export default ProductCard