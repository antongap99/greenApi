import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './app.css';
import { LoginPage } from './pages/LoginPage/LoginPage';
import {  MainPage } from './pages/MainPage/MainPage';
import { useAppSelector } from './redux/redux-hooks/hooks';


function App() {
  const [path, setPath] = useState('/')

  return (
    <>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <LoginPage />
              </>
            }
          >
          </Route>
          <Route
            path='auth'
            element={
              <>
                <MainPage />
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
    </>
  )
}

export default App
