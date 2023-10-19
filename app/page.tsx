import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WebsiteCard from "./components/websiteCard";
import data from "@/public/data/website.json";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-green-200">
        <Navbar />
        <div className="flex-grow   items-center w-full flex flex-col p-2">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              🌟All in one
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              รวบรวม Website ใน มหาวิทยาลัยเกษตรศาสตร์บางเขน
            </p>
          </div>
          {/* ---------------------------------------------------------------- */}
          <section className="flex flex-wrap w-full items-center justify-center mx-auto">
            {data.map((item, index) => (
              <div key={index} className="">
                <WebsiteCard
                  websiteName={item.name}
                  description={item.description}
                  websiteTag={item.tag}
                  websiteURL={item.url}
                />
              </div>
            ))}
          </section>
          {/* ---------------------------------------------------------------- */}
        </div>

        <div className="sticky bottom-0 md:pl-36 md:pr-36">
          <Footer />
        </div>
      </div>
    </>
  );
}
