import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
