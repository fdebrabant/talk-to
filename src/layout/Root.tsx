import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Root() {
  return (
    <div className="app-content container">
      <Header/>
      <main role="main">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}
