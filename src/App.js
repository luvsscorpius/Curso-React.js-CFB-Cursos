import React from 'react'
import './App.css'

export default function App() {

  const userRoles = ['admin', 'user']

  return (
    <div>
      {userRoles.map((role, index) => (
        < p key={index} >
          {role === 'admin' ? 'Admin' : 'Usuário'}
        </p>
      ))
      }
    </div >
  )
}