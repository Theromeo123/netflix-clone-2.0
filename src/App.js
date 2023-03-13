import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screns/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoginScreen from './screns/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screns/ProfileScreen';


export default function App() {
  const user= useSelector(selectUser);
  const dispatch= useDispatch();

useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
  if(userAuth){
    //Logged in
    dispatch(
      login({
        uid: userAuth.uid,
        email: userAuth.email,
      })
    );
  }else{
    //Logged out
    dispatch(logout());
  }
  });
  return unsubscribe;
},[dispatch]);

  return (
    <div className='app'>
    <BrowserRouter>
    {!user ?(
      <LoginScreen/>
    ):(
      <Routes>
        <Route  exact path="/" element={<HomeScreen />}> </Route>
        <Route  path="/profile" element={<ProfileScreen />}> </Route>
      </Routes>
      )}
    </BrowserRouter> 
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
