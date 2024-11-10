import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div
      className='h-screen w-full flex flex-col items-center justify-center  gap-4
    bg-[url(https://images.unsplash.com/photo-1553686308-633f8656b49a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob3BwaW5nJTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D)] bg-cover'
    >
      <div className='flex flex-col items-center justify-center gap-4 bg-black bg-opacity-40 rounded-xl border-transparent py-10 px-4 backdrop-blur'>
        <h1 className='primary text-4xl'>Shop With Others</h1>
        <p className='text-2xl w-2/3 text-center'>Have doubts about product? Chat with people viewing the same product!</p>
        <Link to='/products' className='btn btn-primary'>
          Shop now
        </Link>
      </div>
    </div>
  )
}

export default HomePage
