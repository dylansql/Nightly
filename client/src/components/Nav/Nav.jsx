import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

export default function Nav(props) {
    const { currentUser, handleLogout } = props;
    const [ham, setHam] = useState(false)

  const toggleHamburger = () => {
    setHam(!ham)
  }

    const authenticatedOptions = (
        <div class="auth-nav">
        <nav className={ham ? 'showMenu' : 'menu'}>
        <NavLink className="link menuItem" to="/posts">Main</NavLink>
        <NavLink className="link menuItem" to="/posts/new">
          Create Post
        </NavLink>
        <NavLink className="link menuItem" to="/help">
          Help
        </NavLink>
        <NavLink className="link menuItem" onClick={handleLogout} to="/">
          Sign Out
        </NavLink>
        </nav>
        <div className="ham-button">
          <button className="hamburger" onClick={toggleHamburger}>
          <i>X</i>
          </button>
          </div>
        </div>
    )
    
    const unauthenticatedOptions = (
        <div className="nav-heading">
          <nav className={ham ? 'showMenu' : 'menu'}>
            <NavLink className="link menuItem" to="/signup">
              Sign Up
            </NavLink>
            <NavLink className="link menuItem" to="/signin">
              Log In
            </NavLink>
          </nav>
          <div className="ham-button">
          <button className="hamburger" onClick={toggleHamburger}>
          <i>X</i>
          </button>
          </div>
        </div>
    )

    return (
        <nav className="nav">
          <div class="nav-auth">
            <NavLink to="/">
              <div className="homepage">
                Nightly
              </div>
            </NavLink>
          </div>
          <div className="nav-links">
            {currentUser && <div className="link-welcome">Welcome, {currentUser.username}!</div>}
            {/* {alwaysOptions} */}
            {currentUser ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </nav>
      );

}
