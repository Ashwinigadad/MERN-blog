import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* Left */}
        <div>
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-black text-5xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 rounded-lg text-white">
              Ash's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is the demo project you can sign up with email and password
          </p>
        </div>

        {/* Right */}
        <div>
          <form>
            <div className="mb-4">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>

            <div className="mb-4">
              <Label value="Your Email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>

            <div className="mb-4">
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
