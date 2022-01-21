import './App.css';
import SignIn from './screens/Signin/SignIn';
import SignUp from './screens/Signup/Signup';
import MainContainer from './containers/MainContainer'
import SignOut from './screens/SignOut/SignOut';



import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import {
  signInUser,
  signUpUser,
  removeToken,
  verifyUser,
} from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await signInUser(formData);
    setCurrentUser(userData);
    history.push('/posts');
  };

  const handleRegister = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };



  return (
    <div className='App'>
        <Switch>
          <Route exact path='/signin'>
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route exact path='/signup'>
            <SignUp handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} handleLogout={handleLogout} />
          </Route>
          <Route exact path='/signout'>
              <SignOut handleLogout={handleLogout} />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
