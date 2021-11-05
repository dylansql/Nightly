import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

export default function Nav(props) {
    const { currentUser } = props;
    const [ham, setHam] = useState(false)

  const toggleHamburger = () => {
    setHam(!ham)
  }

    const authenticatedOptions = (
        <>
        <nav className={ham ? 'showMenu' : 'menu'}>
        <NavLink className="link menuItem" to="/posts">Main</NavLink>
        <NavLink className="link menuItem" to="/posts/new">
          Create Post
        </NavLink>
        <NavLink className="link menuItem" to="/help">
          Help
        </NavLink>
        <NavLink className="link menuItem" to="/signout">
          Sign Out
        </NavLink>
        </nav>
        <div className="ham-button">
          <button className="hamburger" onClick={toggleHamburger}>
          <i className={ham ? 'far fa-arrow-alt-circle-up' : 'fas fa-arrow-circle-up'}></i>
          </button>
          </div>
        </>
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
          <i className={ham ? 'far fa-arrow-alt-circle-up' : 'fas fa-arrow-circle-up'}></i>
          </button>
          </div>
        </div>
    )

    return (
        <nav className="nav">
          <div>
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
