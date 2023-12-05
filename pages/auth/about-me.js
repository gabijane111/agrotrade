import Head from "next/head";
import Image from "next/image";
import { FaHtml5, FaCss3Alt,FaReact } from "react-icons/fa";
import { TbBrandJavascript,TbBrandNextjs} from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";


export default function aboutMe () {
        return (
        <>
         <Head>
            <title>About Me</title>
         </Head> 

        <main className="flex flex-col bg-pink-100 w-screen md:flex md:flex-row w-sreen py-10 px-10">
            
             <div className="text--2xl p-6">
               <p className="p-4">Hi, i am</p>
               <p className="flex flex-cols text-5xl font-bold p-2">Maryjane</p>                
               <p className="pt-4 p-4">A certified web developer with expertise in HTML,CSS,TAILWIND,JAVASCRIPT,REACT AND NEXT.JS currently designing 
                smooth user interaction with information and data, While exploring the world.</p>

               <div className="flex flex-cols justify-center pt-4 gap-6">
               <FaHtml5 className="text-4xl"/>
               <FaCss3Alt className="text-4xl"/>
               <TbBrandJavascript className="text-4xl"/>
               <FaReact className="text-4xl"/>
               <TbBrandNextjs className="text-4xl"/>
               <SiTailwindcss className="text-4xl"/>
             </div>

            </div>

             <div className="pt-4">
                <Image
                width={500}
                height={800}
                className="rounded-full"
                src='/meeee.jpg'/>
             </div>

        </main>               
        </>
        ) 
}
