import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-6xl mx-auto'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">M4RKBELLO</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>
                  OHAHA
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
