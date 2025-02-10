import { useState } from "react";
// import {Google} from '@mui/icons-material';
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase/config";
import { toast } from "react-toastify";


const Signup = ({setIsLogin,handleSignInWithGoogle}) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");



   

    const signUpfun = async ()=>{

        if(registerEmail!=='' && registerPassword!=='' && registerName!==''){
           try {
              const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
              const user = userCredential.user;
              console.log(user);
              toast.dismiss();
              toast.success(' Account Created successfully', {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setIsLogin(true)
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


    return (
        <div className="bg-gray-600 text-black rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
          <h3 className="text-xl font-semibold text-white pt-2">
            Create Account!
          </h3>
          <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="text-xl cursor-pointer border-white">
            <FaGoogle onClick={handleSignInWithGoogle} className="text-orange-600"/>  
            </div>
           
          </div>
          {/* Inputs */}
          <div className="flex flex-col items-center justify-center mt-2">
            <input
              type="text"
              value={registerName}
              onChange={(e)=>setRegisterName(e.target.value)}
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Name"
            />
            <input
              type="email"
              value={registerEmail}
              onChange={(e)=>setRegisterEmail(e.target.value)}
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Email"
            />
            <input
              type="password"
              value={registerPassword}
              onChange={(e)=>setRegisterPassword(e.target.value)}
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Password"
            />
            
            <button className="rounded-2xl m-4 text-blue-900 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-green-600 transition duration-200 ease-in" onClick={signUpfun} >
              Sign Up
            </button>
          </div>
          <p className="text-white mt-4 text-sm">Already have an account ⤵️ </p>
          <p
            className="text-white mb-4 text-sm font-medium cursor-pointer"
            onClick={() => setIsLogin(true)}
          >
            Sign In to your Account?
          </p>
        </div>
      );
}

export default Signup