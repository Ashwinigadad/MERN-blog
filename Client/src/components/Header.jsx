import { Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import { Link,useLocation } from 'react-router-dom';
import { AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa'

export default function Header() {
  const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link
        to="/"
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-black'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 rounded-lg text-white'>
          Ash's
        </span>
        Blog
      </Link>
      
      <form className='hidden lg:block'>
        <TextInput
          type='text'
          placeholder='search...'
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='grey' pill>
        <AiOutlineSearch/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
          <FaMoon/>
        </Button>
        <Link to='/sign-in'>
        <Button gradientDuoTone='purpleToBlue'>
          SignIn
        </Button>
        </Link>
      </div>
      <NavbarToggle/>
      <Navbar.Collapse>
          <Navbar.Link active={path==='/'} as={'div'}>
            <Link to='/'>
            Home
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Navbar.Link active={path==='/about'} as={'div'}>
            <Link to='/about'>
            About
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Navbar.Link active={path==='/projects'} as={'div'}>
            <Link to='/projects'>
            projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}
