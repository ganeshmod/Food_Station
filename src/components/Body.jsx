import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";

export default function Body() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-2 sm:pt-3 pb-24 sm:pb-28 min-h-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
