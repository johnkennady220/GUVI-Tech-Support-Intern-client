import { Route, Routes } from "react-router";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';
import RequireAuth from './components/RequireAuth';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
    <Toaster />
      <Routes>
        <Route path="/" 
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
      </Routes>
    </>
  );
}

export default App;
