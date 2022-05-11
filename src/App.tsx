import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ListPage } from './pages/ListPage'
import { AboutPage } from './pages/AboutPage'

const App: React.FC = () => {
  
  return <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
        <Route element = {<ListPage />} path="/" />
        <Route element = {<AboutPage />} path="/about"/>
      </Routes>
    </div>
  </BrowserRouter>
}

export default App;
