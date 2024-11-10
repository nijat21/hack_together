import { useParams, useNavigate, Link } from 'react-router-dom'
import { v4 as uniqueKey } from 'uuid'
import Chat from '@components/Chat'
import products from '../data/ProductsData.json'

function SingleProduct() {
  const navigate = useNavigate()
  const { productId } = useParams()
  console.log(productId)
  const product = products.find((prod) => prod._id === productId)

  return (
    product && (
      <div className='h-screen w-full flex flex-col box-border'>
        <div className='flex m-10 gap-2'>
          <div className='carousel rounded-box w-2/5 gap-4'>
            {product.productPhotos &&
              product.productPhotos.map((photo) => {
                return (
                  <div key={uniqueKey()} className='carousel-item w-4/5'>
                    <img src={photo} className='w-full' />
                  </div>
                )
              })}
          </div>
          <div className='w-1/2 ml-2'>
            <h1 className='font-bold my-2'>{product.name.toUpperCase()}</h1>
            {product?.description && <p>{product.description}</p>}

            {product.details?.benefits && product.details.benefits.length > 0 && <h1 className='font-bold my-2'>Benefits</h1>}
            {product.details?.benefits.map((benefit) => {
              return <li key={uniqueKey()}>{benefit}</li>
            })}

            {product.details?.product_details && product.details.product_details.length > 0 && (
              <h1 className='font-bold my-2'>Product Details</h1>
            )}
            {product.details?.product_details.map((detail) => {
              return <li key={uniqueKey()}>{detail}</li>
            })}
            {product.details?.story && <h1 className='font-bold my-2'>{product.name} Origins</h1>}
            <p>{product.details?.story}</p>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <div className='mr-10 flex gap-1'>
            <Chat productId={productId} />
            <button className='btn btn-secondary'>Buy</button>
          </div>
        </div>
        <button onClick={() => navigate(-1)} className='text-primary'>
          Back
        </button>
      </div>
    )
  )
}

export default SingleProduct
