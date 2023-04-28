import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

import NestedLayout from "./nested-layout";
import Footer from "../Footer";

export default function Layout({ children }: any) {

  return (
    <main className={`m-0 p-0 md:flex flex-col text-center 
    s-h-screen overflow-x-hidden bg-blue-200 bg-cover bg-center
    ${noto.className}`}>
      <NestedLayout>
        {children}
      </NestedLayout>
      <Footer />
    </main>
  )
}