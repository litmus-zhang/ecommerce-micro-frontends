import React, { useState } from 'react'
import { login, useLoggedIn } from './cart'

export default function Login()
{
    const loggedIn = useLoggedIn()
    const [showLogin, setShowLogin] = useState(false)

    const [username, setUsername] = useState("sally")
    const [password, setPassword] = useState("123")
    if (loggedIn) return null;

  return (
      <div>
          <span onClick={()=> setShowLogin(!showLogin)}>
              <i className='ri-fingerprint-line text-2xl' id='showlogin'></i>
          </span>
          {
              showLogin && (
                  <div
                      className='absolute p-5 border-4 border-blue-800 bg-white rounded-lg shadow-lg'
                      style={{
                          width: 300,
                          top: "2rem",
                          left: -250,
                      }}
                  >
                      <input
                          type="text"
                          placeholder="username"
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                          className='border-2 text-sm border-gray-400 p-2 rounded-md w-full'
                      />
                      <input
                          type="password"
                          placeholder="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className='border-2 text-sm border-gray-400 p -2 rounded-md w-full'
                      />
                      <button className='bg-green-900 text-white px-5 rounded-md'
                          onClick={() => login(username, password)}
                          id='loginbtn'
                      >
                            Login
                      </button>
                  </div>
                )
          }

    </div>
  )
}
