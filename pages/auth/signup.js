import Head from "next/head";
import Image from "next/image";
import { TextField,Button } from "@mui/material";

export default function Signup () {
    return (
        <>
        <Head>
            <title>Signup | AgroTrade</title>
        </Head>
        <main className="h-screen flex justify-center items-center py-20">
            <div className="w-full md:w-[420px]">
                <Image 
                width={400}
                height={200}
                className="rounded-t-md"
                src='/farm-trade.jpg' alt="farm trade"/>

                <div className="flex flex-col gap-3">
                    <ul>
                        <li>Farmer</li>
                        <li>Buyer</li>
                    </ul>

                    <div>
                    <h2 className="text-2xl">Register as a buyer account</h2>
                    <p className="text-xs text-green-600">Fill the form below to create a buyer's account</p>
                    </div>

                 <form>
                    <div className="mb-2">
                    <TextField className="w-ful" variant="outlined" label="first name"/>
                    </div>

                    <div className="mb-2">
                    <TextField className="w-full" variant="outlined"
                    label="Last name"/>
                    </div>

                    <div className="mb-2">
                    <TextField className="w-full" type="email" variant="outlined" label="Email"/>
                    </div>

                    <div className="mb-2">
                    <TextField className="w-full" variant="outlined" label="Account type"/>
                    </div>

                    <button className="h-[48px] w-full flex justify-center items-center bg-green-700 
                    text-white text-xl rounded-md">Register</button>
                </form> 

                </div>
            </div>
        </main>
        </>
    )
}