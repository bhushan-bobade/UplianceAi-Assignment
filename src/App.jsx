import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./Pages/counter/Counter";
import Header from "./Pages/header/Header";
import Editor from "./Pages/Editor/Editor";
import UserData from "./Pages/UserData/UserData";
import Authentication from "./Pages/authentication/Authentication";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CounterProtectedRoute from "./ProtectedRoute/CounterProtectedRoute";


function App() {
  return (
    <>
       
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Authentication />} />
            <Route path="/" element={<CounterProtectedRoute>
              <Counter />
              </CounterProtectedRoute>} />
              <Route path="/Counter" element={<Counter />} />
            <Route path="/UserData" element={<UserData />} />
            <Route path="/Editors" element={<Editor />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
        
    </>
  );
}

export default App;
