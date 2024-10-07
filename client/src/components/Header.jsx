import {Navbar} from 'flowbite-react'
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <nav className='border-b-2 bg-red-400'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white link' >Ash's
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Ash's</span>Blog
      </Link>
    </nav>
  )
}
