import { Link } from 'react-router-dom'

function App() {
  return (
    <main className='text-center '>
      <h1 className='text-2xl'>Job Portal</h1>
      <div className='flex gap-4 justify-center'>
        <Link to='/login'>
          <button className='border-2 border-black shadow-lg'>Login Page</button>
        </Link>
        <Link to='/signup'>
          <button className='border-2 border-black shadow-lg'>Sign up Page</button>
        </Link>
      </div>
    </main>
  )
}

export default App
