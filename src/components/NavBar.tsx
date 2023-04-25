
import { Jost } from 'next/font/google'
import Link from 'next/link'

const jost = Jost({ subsets: ['latin']})

export default function Nav() {
  return (
    <main>
    <div className='justify-center items-center'>
      <li className='list-none flex flex-row'>
      <ul><Link className='ml-2 mr-2'href='/'>home</Link></ul>
        <p>|</p>
        <ul><Link className='ml-2 mr-2'href='/about'>about</Link></ul>
        <p>|</p>
        <ul><Link className='ml-2 mr-2'href='/work'>work</Link></ul> 
        <p>|</p>
        <ul><Link className='ml-2 mr-2'href='/contact'>contact</Link></ul>
      </li>
    </div>
    </main>
  )
}