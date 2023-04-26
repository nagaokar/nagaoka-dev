import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import Layout from '../components/layouts/layout'
import NestedLayout from '../components/layouts/nested-layout'
import Footer from '@/components/Footer'
import Nav from '@/components/NavBar'



export type NextPageWithLayout<P = {}, IP =P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}