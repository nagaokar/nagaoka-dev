import NestedLayout from "./nested-layout";
import Footer from "../Footer";

import { Noto_Sans_JP } from 'next/font/google'
import Nav from "../NavBar";
const noto = Noto_Sans_JP(
  { 
    weight:['100','300','400', '500', '700', '900'],
    style: ['normal'],
    subsets: ['latin']
  })


export default function Layout({ children }: any) {

  return (
    <main className={`m-0 p-0 md:flex flex-col text-center 
    s-h-screen overflow-x-hidden bg-blue-200 bg-cover bg-center font-light
    `}>
      <Nav />
      <NestedLayout>
        {children}
      </NestedLayout>
      <Footer />
    </main>
  )
}