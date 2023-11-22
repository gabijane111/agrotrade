import Head from "next/head";
import { jobOpening } from '../components/jobOpening'
import { infoBox } from "@/components/infoBox";

export default function index () {
  return (
    <>
      <Head>
            <title>Agro Trade</title>
      </Head>
      <main>
        <infoBox>
          <ul>
            <li>Watermelon</li>
            <li>orange</li>
            <li>gauva</li>
          </ul>
        </infoBox>

        <jobOpening title='Next JS Hybrid Work'
       location='Nairaobi'/>

       <jobOpening 
       title='React Developer'
       location='Enugu'/>
      </main>
    </>
  )
  }