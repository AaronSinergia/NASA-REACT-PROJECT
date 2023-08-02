import {NavLink, Outlet} from 'react-router-dom'
import './App.css'


function App() {

  return (
      <div className="content">
        <div className="app_bar">
          <nav className="navbar">
            <NavLink to="">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
          </nav>
        </div>
        <main className="outlet">
          <Outlet />
        </main>
        <footer className="footer">© Created by Aaron Carrasco for RockTheCode</footer>
      </div>
  )
}

export default App
