import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

import Nav from "../NavBar";
import NestedLayout from "./nested-layout";
import Footer from "../Footer";
import Home from '@/pages';
import About from '@/pages/about';
import Work from '@/pages/work';


export default function Layout({ children }: any) {
  return (
    <main className={`m-0 p-0 md:flex flex-col text-center 
    s-h-screen bg-blue-200 overflow-x-hidden
    ${noto.className}`}>
      <NestedLayout>
        {children}
      </NestedLayout>
      <Footer />
    </main>
  )
}