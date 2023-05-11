export default function Layout({ children }: any) {

  return (
    <main className={`flex flex-col h-screen max-w-screen overflow-x-hidden 
    bg-white font-regular lowercase text-black
      xs:px-4 sm:px-4 md:px-8 lg:px-16
    `}>
      {/* <Nav /> */}
        {children}
    </main>
  )
}