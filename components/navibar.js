import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useSession } from "next-auth/react";
import { CiUser } from "react-icons/ci";

const montserrat_500 = Montserrat ({
    subsets: ['latin'],
    weight: '500'
}) 

export default function NavBar () {
    const {data:session} = useSession();
    const accountType = 'seller'
    console.log(session);

    return (
        <div>
            <nav className={`h-[58px] flex items-center px-20 justify-betwwen ${accountType == 'seller' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                {/* desktop navbar */}
                <div className="w-full flex flex-row justify-between items-center">
                    <ul className="flex flex-row items-center gap-12">
                        <li>
                            <Image width={38} height={38} src='/AGROTRADE.png' alt="logo" />
                        </li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}><Link href='/'/>Home</li>
                        <li className={`${montserrat_500.className} hidden md:block text-green-700 hover:text-yellow-700`}><Link href='/About-us'/>About us</li>
                        <li className={`${montserrat_500.className} hidden md:block text-green-700 hover:text-yellow-700`}><Link href='/contact-us'/>Contact us</li>
                        <li className={`${montserrat_500.className} hidden md:block text-green-700 hover:text-yellow-700`}><Link href='/Products'/>Products</li>
                    </ul>

                    {session?
                    <Link href={'/modern-farm.png'}>
                        <Image width={48} 
                        height={48}
                        src={session.user.image}
                        alt="profile image"
                        className="rounded-full"/>
                        </Link>
                        :<Link href='/auth/signup'>Sign up</Link>}
                </div>
            </nav>

            <div className="grid grid-cols-3">
                <div className="h-[4px] bg-green-500"></div>
                <div className="h-[4px] bg-yellow-500"></div>
                <div className="h-[4px] bg-red-500"></div>
            </div>
        </div>
    )
}