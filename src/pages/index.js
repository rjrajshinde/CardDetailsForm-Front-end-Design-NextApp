import CardFrontBack from "@/components/CardFrontBack";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Card Details Form</title>
        <meta name="description" content="Developed By Raj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardFrontBack />
      </main>
    </>
  );
}
