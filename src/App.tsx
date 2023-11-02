import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Reminder from './pages/reminder/Reminder';
import Basket from './pages/shop/Basket';
import Empty from './pages/shop/Empty';
import Wall from './pages/wall/Wall';
import Login from "./pages/user/Login";
import Newaccount from "./pages/user/Newaccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Newaccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/basket/:itemId" element={<Basket />} />
          <Route path="/empty" element={<Empty />} />
          <Route path="/wall" element={<Wall />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
