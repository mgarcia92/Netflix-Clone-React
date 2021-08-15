import React,{useEffect} from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './components/homeScreen'
import Login from './components/login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { auth } from './firebase';
function App() {
  const user = null;
  useEffect(() => {
   const unsubscribe =  auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log("logged in",userAuth)
      }else{
        console.log("logged out")
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="app">
      {
        user == null ?
          <Login />
          :
          <Router>
            <Switch>
              <Route path="/test">
                <h1>""""</h1>
              </Route>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </Router>
      }

    </div>

  );
}

export default App;
