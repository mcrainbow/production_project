import './styles/index.scss';
import { Routes, Route, Link } from "react-router-dom"; 
import { AboutPage } from "./pages/AboutPage/AboutPage.async";
import { MainPage } from "./pages/MainPage/MainPage.async";
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



export  function App() {
  const { theme, toggleTheme } = useTheme();

  return (
      <div className={classNames('app', { }, [theme])}>
        <button onClick={toggleTheme}>Theme Switcher</button>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
      </div>
  )
}
