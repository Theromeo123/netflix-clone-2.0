import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {
 const [singIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen_background'>
<img className='loginScreen_logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''/>

<button onClick={() => setSignIn(true)}
 className='loginScreen_button'>Sign In</button>

<div className='loginScreen_gradient'/>
      </div>
      <div className='loginScreen_body'>
        {singIn ?(
          <SignupScreen/>
        ):(
          <>
<h1>Unlimited films, TV programmes and more.</h1>
<h2>Watch anyWhere. Cancel at any time.</h2>

<h3>
  Ready to watch? Enter Your email to create or restart your membership
</h3>
<div className='loginScreen_input'>
  <form>
    <input type='email' placeholder='Email Address'/>
    <button onClick={()=> setSignIn(true)}
     className='loginScreen_getStarted'>GET STARTED
    </button> 
  </form>
</div>
</>

        )}
  
</div>
    </div>
  )
}

export default LoginScreen
