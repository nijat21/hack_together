import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-4'>
      <h1 className='primary text-4xl'>Live Chat for Products</h1>
      <p className='text-2xl w-2/3 text-center'>Have doubts about product? Chat with people viewing the same product!</p>
      <Link to='/products' className='btn btn-primary'>
        Shop now
      </Link>
    </div>
  )
}

export default HomePage
