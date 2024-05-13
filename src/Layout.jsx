import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@section/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <section className="container mx-auto max-w-6xl px-4">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
