import { Noto_Sans_JP } from 'next/font/google'
const noto = Noto_Sans_JP({weight:['100'], subsets: ['latin']})

export default function Footer()
{
    return(
        <main className= {`flex flex-col text-center justify-center ${noto.className}`}>
            <p className="pt-4 text-sm text-white/50">
                Website created by Reiji Nagaoka
            </p>
        </main>
    )
}