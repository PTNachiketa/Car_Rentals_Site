import Landing from "./Screens/Landing";
import { Routes, Route } from 'react-router-dom'
import SignUp from "./Screens/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
}

export default App;
