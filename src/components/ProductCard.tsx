import { Link } from 'react-router-dom'
import { v4 as uniqueKey } from 'uuid'
import { ProductProp, ProductType } from '../types/ProductTypes'

function ProductCard(props: ProductProp) {
  const product: ProductType = props.product

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  return (
    product && (
      <Link
        to={`/products/${product._id}`}
        className='card bg-base-100 w-96 h-3/4 shadow-xl border-box transition-transform ease-out hover:scale-[102%] hover:shadow-xl'
      >
        <figure className='h-96'>
          <img src={product.imgUrl} alt='product image' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title overflow-hidden'>{product.name}</h2>
          <p>{truncateText(product.description, 100)}</p>
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
