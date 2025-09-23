import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page" />
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
        <Card title="Sample Property" description="This is a placeholder property." />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert("Booked!")} />
        </div>
      </main>
    </div>
  );
}
