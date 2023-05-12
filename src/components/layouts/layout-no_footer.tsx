import React from "react";
import Nav from "../NavBar";
import Spacer from "../Spacer";
import Footer from "../Footer";

export default function LayoutNoFooter({ children }: any) {

  return (
    <main className='flex flex-col h-screen max-w-screen overflow-x-hidden 
    bg-white font-regular lowercase text-black'>
      <Nav/>
      {children}
    </main>
  )
}