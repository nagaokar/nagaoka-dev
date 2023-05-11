export default function Layout({ children }: any) {

  return (
    <main className={`flex flex-col h-screen max-w-screen overflow-x-hidden 
    bg-white font-regular lowercase text-black
    `}>
      {/* <Nav /> */}
        {children}
    </main>
  )
}