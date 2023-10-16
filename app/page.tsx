import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function Home() {
  return (<>
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-green-200">
      <Navbar />
      <div className="flex-grow   items-center w-full flex flex-col">
      </div>
      <div className="sticky bottom-0 md:pl-20 md:pr-20">
      <Footer />
      </div>
    </div>
  </>);
}
