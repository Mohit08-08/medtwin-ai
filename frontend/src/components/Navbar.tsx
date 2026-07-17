import { Link } from "react-router-dom";
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
  MedTwin AI
</Link>

      <ul className="nav-links">

        <li>Home</li>

        <li>Features</li>

        <li>About</li>

        <li>Contact</li>

      </ul>

      <Link to="/login">
  <button>Login</button>
</Link>

    </nav>
  )
}

export default Navbar