import Backtotop from "@/MainComponent/Backtotop";
import Footer from "@/MainComponent/Footer";
import Navbar from "@/MainComponent/Navabar";
import { useState, useEffect } from "react";


export default function MainLayout({ children }) {
  return (
    <div className="">
      {/* Navbar - fixed at top */}
   <Navbar/>
      
      <Backtotop/>
      {/* Main content - grows to fill space */}
      <main className=""> {/* pt-20 to account for fixed navbar */}
        {children}
      </main>
      
      {/* Footer - at bottom */}
     <Footer/>
    </div>
  );
}