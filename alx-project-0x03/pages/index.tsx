import Layout from "../components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto mt-32 p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Splash App</h1>
        <p className="text-gray-700">This is the home page content.</p>
      </div>
    </Layout>
  );
}
