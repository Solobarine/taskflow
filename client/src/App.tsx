import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen font-poppins bg-cyan-100 text-zinc-500">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
