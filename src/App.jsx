import { Route, Routes } from 'react-router'
import Home from './Home'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
