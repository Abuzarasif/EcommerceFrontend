import React from 'react'
//     import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
    //   const { loginWithRedirect,logout,isAuthenticated,user,isLoading } = useAuth0();
      const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();

//     const login = useGoogleLogin({
//   onSuccess: tokenResponse => console.log(tokenResponse),
// });
// if (isLoading) {
//      <div>Loading ...</div>
//   }

  return (
    <>

    Login here
    {
 
}
{!isAuthenticated ? 
  <button className='btn btn-primary' onClick={() => loginWithRedirect()}>Log In</button>
: 
  <button className='btn btn-success' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    Log Out
  </button>
}
{
    isAuthenticated && <h1>
        {user.name}
    </h1>
}

{/* <button onClick={() => login()}>Sign in with Google 🚀</button>; */}

{/* <GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponsedecode=jwtDecode(credentialResponse.credential)
    console.log(credentialResponsedecode)
  }}
  onError={() => {
    console.log('Login Failed')
  }}
/> */}
    </>
  )
}

export default Login