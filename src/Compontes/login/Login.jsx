import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../fireBase/config";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = ({setIsLogin,handleSignInWithGoogle}) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate()

    const signInfun = async ()=>{
      if(loginEmail!=''&& loginPassword!==''){
        try {
          const userCredential = await signInWithEmailAndPassword (auth, loginEmail, loginPassword);
          const user = userCredential.user;

          console.log( 'form login page',user.email);
          localStorage.setItem('userEmail', user.email)
          toast.dismiss();
          toast.success(' Login successfully', {
            position: "top-right",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setIsLogin(false)
            navigate('/')
       } catch (error) {
          console.log(error.message);
          toast.dismiss();
          toast.error(error.message, {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
       }

      }else{
        toast.dismiss();
        toast.error('All Fields are Requierd', {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }

    //Sign In Function
    return (
        <div className="bg-gray-600 rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
          <h3 className="text-xl font-semibold text-white font-sans pt-2">Sign In</h3>

          <div className="flex space-x-2 m-4 items-center justify-center">
            <div className="text-xl cursor-pointer border-white">
            <FaGoogle onClick={handleSignInWithGoogle} className="text-orange-600"/>  
            </div>
                 
          </div>
          {/* Inputs */}
          <div className="flex flex-col items-center justify-center">
            <input
              type="email"
              value={loginEmail}
              onChange={(e)=>setLoginEmail(e.target.value)}
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Email"
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e)=>setLoginPassword(e.target.value)}
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Password"
            />
            <button className="rounded-2xl m-2 text-blue-900 bg-white w-2/5 px-4 py-2 shadow-md hover:text-white hover:bg-green-600 transition duration-200 ease-in" onClick={signInfun}>
              Sign In
            </button>
          </div>
          <p className="text-white mt-4 text-sm">Don't have an account ⤵️</p>
          <p
            className="text-white mb-4 text-sm font-medium cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            Create a New Account?
          </p>
        </div>
      );
}

export default Login