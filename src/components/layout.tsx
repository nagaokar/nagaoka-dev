import React from "react";
import Nav from "./NavBar";
import Spacer from "./Spacer";
import Footer from "./Footer";

export default function Layout({ children }: any) {

  return (
    <main className='flex flex-col max-w-screen overflow-x-hidden 
    bg-white font-regular lowercase text-black'>
      <Nav/>
      <div className="mt-12">
        {children}
      </div>
      <Footer/>
    </main>
  )
}