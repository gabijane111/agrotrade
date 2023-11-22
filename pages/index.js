import Head from "next/head";
import { Nunito } from 'next/font/google';

const nunitoBold = Nunito({
  subsets:['latin'],
  weight:'700'
});
const nunito = Nunito({
  subsets:['latin'], 
});

export default function index () {
  return (
    <>
      <Head>
            <title>Agro Trade</title>
      </Head>
      <main className="bg-home w-full h-screen  
      flex flex-col justify-end md:w-full h-screen">
        {/* bottom contect */} 
        <div className="elementFlex green-box flex flex-col gap-6 h-[40%] bg-gradient-to-b from-green-600/90 to-green-900 p-3 pb-12 md:flex flex-col justify-center lg:h-[100%] lg:w-[634px]">
          
        <div className={styles.block}>
          <h1 className={`${nunitoBold.className}text-4xl`}>
            <span className="text-white">Agro</span>
            <span className="text-lime-300">Trade</span>
          </h1>
          <p className="text-center text-md text-white">Your easy and reliable online marketplace to trade farm produce</p>  
        </div> 

        <blockquote className={styles.block}>
          <button className={`${styles.btn} bg-lime-500`}>Login</button>
          <button className={`${styles.btn} bg-white`}>Register</button>
        </blockquote>   
        </div>
      </main>
    </>
  )
  }

  const styles = {
    block: 'flex flex-col items-center gap-3',
    btn: 'w-full h-[48px] flex justify-center items-center text-xl font-bold rounded-xl'
  }