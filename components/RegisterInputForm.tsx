import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import {
  MailIcon,
  LockClosedIcon,
  AtSymbolIcon,
  UserIcon,
} from '@heroicons/react/outline'

interface Props {
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const RegisterInputForm = ({ onFormSubmit }: Props): JSX.Element => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const inputFieldClassNames =
    'w-full p-2 text-sm border rounded-md outline-none transition duration-150 ease-in-out mb-4 focus:outline-none focus:ring-1 focus:ring-indigo-900'

  return (
    <form
      onSubmit={onFormSubmit}
      className="w-full max-w-md ml-36 mr-auto my-auto bg-gray-50 rounded-lg shadow-lg py-10 px-12"
    >
      <h2 className="text-2xl font-extralight mb-8 text-center text-indigo-900">
        Register
      </h2>
      <div>
        <label htmlFor="email" className="font-thin inline-flex">
          <MailIcon className="h-6 w-6 mr-1" />
          Email
        </label>
        <input
          type="email"
          className={inputFieldClassNames}
          id="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username" className="font-thin inline-flex">
          <AtSymbolIcon className="h6 w-6 mr-1" />
          Username
        </label>
        <input
          type="text"
          className={inputFieldClassNames}
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name" className="font-thin inline-flex">
          <UserIcon className="h6 w-6 mr-1" />
          Name
        </label>
        <input
          type="text"
          className={inputFieldClassNames}
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="font-thin inline-flex">
          <LockClosedIcon className="h6 w-6 mr-1" />
          Password
        </label>
        <input
          type="password"
          className={inputFieldClassNames}
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-center items-center mt-6">
        <button className="bg-indigo-700 py-2 px-4 text-sm text-white rounded focus:outline-none hover:bg-indigo-900">
          Register
        </button>
      </div>

      <div className="font-thin text-gray-500 mt-4 text-center">
        <Link href="/forget-password">Forgot password?</Link>
      </div>
      <div className="font-thin text-gray-500 mt-4 text-center">
        <Link href="/login">Already have an account?</Link>
      </div>
    </form>
  )
}

export default RegisterInputForm
