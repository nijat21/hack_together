import ProductCard from '@components/ProductCard'

function Products() {
  const product = {
    _id: '123446',
    name: "Nike Air Force 1 '07",
    imgUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png',
    description: 'If a dog chews shoes whose shoes does he choose?',
    tags: ['Bestseller'],
  }

  return (
    <div className='h-screen flex items-center'>
      <ProductCard product={product} />
    </div>
  )
}

export default Products
