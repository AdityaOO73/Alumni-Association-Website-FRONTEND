import Headers from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Headers />

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg max-w-xl">
          Welcome to EchoAlma, your go-to platform for connecting alumni and
          prospects. We are dedicated to building strong alumni networks and
          empowering communities.
        </p>
      </main>

      <Footer />
    </div>
  );
}
