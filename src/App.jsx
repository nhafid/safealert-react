import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/landing_page/Main";
import Dashboard from "./components/dashboard/Main";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase/firebase";
import Recall_Items from "./components/recalled_items/Recall_Items.jsx";
import News from "./components/news/News.jsx";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/dashboard" /> : <LandingPage />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recall-items" element={<Recall_Items />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
