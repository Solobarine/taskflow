import { Outlet } from "react-router-dom";
import Menu from "../../Components/Menu";
import AuthCheck from "../Auth/AuthCheck";

const Main = () => {
  return (
    <AuthCheck>
      <div className="relative flex">
        <Menu />
        <div className="grow min-h-screen bg-gray-300/60 grid">
          <Outlet />
        </div>
      </div>
    </AuthCheck>
  );
};

export default Main;
