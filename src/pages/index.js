import CardForm from "@/components/CardForm";
import CardFrontBack from "@/components/CardFrontBack";
import ThankYou from "@/components/ThankYou";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Home() {
  const isSubmit = useSelector((state) => state.cardForm.isSubmit);
  console.log("isSubmit-----------" + isSubmit);
  return (
    <>
      <Head>
        <title>Card Details Form</title>
        <meta name="description" content="Developed By Raj" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardFrontBack />
        {isSubmit ? <ThankYou /> : <CardForm />}
      </main>
    </>
  );
}
