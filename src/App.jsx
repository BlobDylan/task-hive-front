import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
