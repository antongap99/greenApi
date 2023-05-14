import { useState } from 'react';
import { Login } from './components/login/Login';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Login />
              </>
            }
          >
          </Route>
          <Route
            path='*'
            element={
              <>
                <ErrorPage/>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
