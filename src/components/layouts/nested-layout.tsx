export default function NestedLayout({ children }: any)  {
  return (
  <main className='sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl
  flex flex-col justify-center text-center overflow-x-hidden overflow-y-hidden
  font-light'>
    {children}
  </main>
  )
}