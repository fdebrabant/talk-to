import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Root() {
  return (
    <div className="app-content container">
      <Header></Header>
      <main role="main">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}
