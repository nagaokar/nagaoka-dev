import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

import Nav from "../NavBar";
import NestedLayout from "./nested-layout";
import Footer from "../Footer";


export default function Layout({ children }: any) {
  return (
    <main className={`m-0 p-0 md:flex flex-col text-center pb-2 
    w-screen min-h-screen bg-blue-200
    h-screen overflow-x-hidden overflow-h-hidden
    ${noto.className}`}>
      <Nav />
      <NestedLayout>{children}</NestedLayout>
      <Footer />
    </main>
  )
}