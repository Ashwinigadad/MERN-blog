import { Button, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Debug log

    try {
      const res = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Signup response:", data); // Debug log
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
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

        <div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <Label value="Your Email" />
              <TextInput type="email" placeholder="name@company.com" id="email" onChange={handleChange} />
            </div>

            <div className="mb-4">
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" onChange={handleChange} />
            </div>

            <Button gradientDuoTone="pinkToPurple" type="submit">
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
