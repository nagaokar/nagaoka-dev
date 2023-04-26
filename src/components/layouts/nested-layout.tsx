import { AppProps } from "next/app";
import { ReactElement } from "react";

export default function NestedLayout({ children })  {
  return (
    <main className="h-screen pt-10">
    {children}
    </main>
  )
}