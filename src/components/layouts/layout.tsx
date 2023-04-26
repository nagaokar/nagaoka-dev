import { AppProps } from "next/app";
import { ReactElement } from "react";
import Footer from "../Footer";
import Nav from "../NavBar";
import NestedLayout from "./nested-layout";

export default function Layout({ children }) {
  return (
    <main className="md:flex flex-col text-center pb-2 w-screen min-h-screen 
    bg-gradient-to-br from-slate-50 to-blue-600
    ">
    <Nav />
    <NestedLayout>
      {children}
    </NestedLayout>
    <Footer />
    </main>
  )
}