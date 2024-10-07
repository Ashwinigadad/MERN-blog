import {Navbar} from 'flowbite-react'
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <Navbar className='border-b-2 bg-red-400'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-cyan-600 via-purple-500 to-pink-400 rounded-lg text-white'>Ash's</span>
          Blog
        </Link>
    </Navbar>
  )
}
