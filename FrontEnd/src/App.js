import Landing from "./Screens/Landing";
import { Routes, Route } from 'react-router-dom'
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
