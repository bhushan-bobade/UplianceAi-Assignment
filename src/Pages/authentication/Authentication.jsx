import { useState } from "react";
import Login from "../../Compontes/login/Login";
import Signup from "../../Compontes/signup/Signup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../fireBase/config";
import { useNavigate } from "react-router-dom";


const Authentication = () => {

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
     
      console.log( 'form authentication page',user.email);
          localStorage.setItem('userEmail', user.email)
          console.log(user);
          toast.dismiss();
          toast.success(' Login successfully', {
            position: "top-right",
            autoClose: 1000,
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
      console.error(error.message);
      toast.dismiss();
          toast.error(error.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
  };
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center justify-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1 items-center text-center">
          <p className="text-6xl text-blue-900 font-bold">Upliance</p>
          <p> </p>
          <p> </p>
          <p className="font-medium text-lg leading-1 text-orange-500">
          The upliance is an AI Cooking Assistant that offers a diverse range of recipes.          
          </p>
          <p> </p>
          <p className="font-large text-lg font-bold text-orange-500">
          Log in First to View the Counter Page ➡️
          </p>
        </div>
        {isLogin ? <Login handleSignInWithGoogle={handleSignInWithGoogle} setIsLogin={setIsLogin}/> : <Signup handleSignInWithGoogle={handleSignInWithGoogle} setIsLogin={setIsLogin}/>}
      </main>
    </div>
  );
};

export default Authentication;
