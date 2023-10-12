import Head from "next/head"; //Next.js제공
import Link from "next/link";
import Seo from "../components/Seo";
import { useRouter } from "next/router";


export default function Home ({results}) {

  const router = useRouter();
  console.log(`home router`, router);
 
  return <div className="container">
            <Seo title="Home"/>
            <h1>Home</h1>
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                
            `}</style>
        </div>;
}
