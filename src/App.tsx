import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './app.css';
import { LoginPage } from './pages/LoginPage/LoginPage';
import {  MainPage } from './pages/MainPage/MainPage';
import { useAppSelector } from './redux/redux-hooks/hooks';


function App() {
    const navigate = useNavigate();
    const {apiToken, idInstance} = useAppSelector(state => state.auth);

    useEffect(() => {
      if(!apiToken || !idInstance) {
        navigate('/')
      }
    }, [navigate, apiToken, idInstance])
  return (
    <>
        <Routes>
          <Route
            path='/'
            element={<LoginPage />}
          >
          </Route>
          <Route
            path='auth'
            element={<MainPage />}
          >
          </Route>
          <Route
            path='*'
            element={<ErrorPage/>}
          ></Route>
        </Routes>
    </>
  )
}

export default App
