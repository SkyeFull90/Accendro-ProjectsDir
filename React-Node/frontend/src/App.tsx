import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

interface Users {
  id: number,
  name: string,
  age: number,
}

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    axios.get('/api/users').then((res) => {
      setUsers(res.data)
    }
    )
  }, [])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       <div>
        <h1>Users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.age}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
