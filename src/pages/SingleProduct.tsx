import { useParams, useNavigate, Link } from 'react-router-dom'
import { v4 as uniqueKey } from 'uuid'
import Chat from '@components/Chat'
import TestChat from '@components/TestChat'

function SingleProduct() {
  const { bookId: string } = useParams()
  const navigate = useNavigate()

  const product = {
    _id: '123446',
    name: "Nike Air Force 1 '07",
    imgUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png',
    description: `The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: 
                durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.`,
    tags: ['Bestseller'],
    productPhotos: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/AIR+FORCE+1+%2707.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/AIR+FORCE+1+%2707.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-b398-2352e01ba566/AIR+FORCE+1+%2707.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a0e1b96-043c-46d4-96a0-22408b6c771d/AIR+FORCE+1+%2707.png',
    ],
    details: {
      caption: 'LEGENDARY STYLE REFINED',
      benefits: [
        `The stitched overlays on the upper add heritage style, durability and support.`,
        `Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.`,
        `The low-cut silhouette adds a clean, streamlined look.`,
        `The padded collar feels soft and comfortable.`,
      ],
      product_details: [`Foam midsole`, `Perforations on the toe`, `Rubber sole`, `Colour Shown: White/White`, `Style: CW2288-111`],
      story: `Debuting in 1982, the AF-1 was the first basketball shoe to house Nike Air, revolutionising the game while rapidly 
          gaining traction around the world. Today, the Air Force 1 stays true to its roots with the same soft and springy cushioning that changed sneaker history.`,
    },
  }

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
            <p>{product.description}</p>

            <h1 className='font-bold my-2'>Benefits</h1>
            {product.details?.benefits.map((benefit) => {
              return <li key={uniqueKey()}>{benefit}</li>
            })}

            <h1 className='font-bold my-2'>Product Details</h1>
            {product.details?.product_details.map((detail) => {
              return <li key={uniqueKey()}>{detail}</li>
            })}
            <h1 className='font-bold my-2'>{product.name} Origins</h1>
            <p>{product.details?.story}</p>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <div className='mr-10 flex gap-1'>
            {/* <Chat /> */}
            <TestChat />
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
