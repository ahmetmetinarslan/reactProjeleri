import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={currentUser ? <Home/> : <Register />} />
        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/write" element={currentUser ? <Write/> : <Register />} />
        <Route path="/settings" element={currentUser ? <Settings/> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
