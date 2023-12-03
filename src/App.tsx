import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Reminder from './pages/reminder/Reminder';
import Basket from './pages/shop/Basket';
import Empty from './pages/shop/Empty';
import Wall from './pages/wall/Wall';
import Pet from "./pages/home/Pet";
import { AuthProvider } from './services/AuthContext';
import Signup from "./pages/user/Singup";
import Signin from "./pages/user/Singin";
import UserProfile from "./pages/user/UserProfile";
import Welcome from "./pages/user/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/basket/:itemId" element={<Basket />} />
            <Route path="/empty" element={<Empty />} />
            <Route path="/wall" element={<Wall />} />
            <Route path="/pet/:petId" element={<Pet />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
