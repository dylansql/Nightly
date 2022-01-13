import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "./Nav.css";

export default function Nav(props) {
    const { currentUser, handleLogout } = props;


    const authenticatedOptions = (
        <div class="auth-nav">
                <ul class="auth-in-nav">
                  <li class="nav-item">
                    <NavLink to="/help">
                      <a class="nav-link active" aria-current="page" href="#">Help</a>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to="/posts/new">
                      <a class="nav-link active" aria-current="page" href="#">Post</a>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to="/help">
                      <a class="nav-link active" aria-current="page" href="#">Saved</a>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className='signout' onClick={handleLogout} to="/">
                      <a class="nav-link" href="#">Sign Out</a>
                    </NavLink>
                  </li>
                </ul>
            
        </div>
    )
    
    const unauthenticatedOptions = (
        <div className="non-auth">
          <div className="nav-groups">
              <ul class="nav">
                  <li class="nav-item">
                    <NavLink to="/help">
                      <a class="nav-link" id="link" href="#">ABOUT</a>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to="/posts">
                      <a class="nav-link" id="link" href="#">POSTS</a>
                    </NavLink>
                  </li>
                  {/* <li class="nav-item">
                    <NavLink to="/signin">
                      <a class="nav-link" href="#">Sign In</a>
                    </NavLink>
                  </li> */}
                  <li class="nav-item" id="link" id="signup-page">
                    <NavLink to="/signup">
                      <a class="nav-link" href="#" id="get-started">GET STARTED</a>
                    </NavLink>
                  </li>
                </ul>
              </div>
        </div>
    )

    return (
        <nav className="nav">
          <div class="nav-auth">
            <NavLink to="/">
              <div className="homepage">
                NIGHTLY
              </div>
            </NavLink>
          </div>
          <div className="nav-links">
            {currentUser && <div className="link-welcome"> Welcome, {currentUser.username}!</div>}
            {/* {alwaysOptions} */}
            {currentUser ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </nav>
      );

}

